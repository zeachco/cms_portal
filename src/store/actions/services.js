import store from '..';
import {DATA} from '../actionTypes';
import {backend, METHODS} from '../../services/api';
import db from '../../core/firebase';

export const receiveUsers = users => store.dispatch({type: DATA.USERS_RECEIVE, payload: users});

const cacheTime = 30000;
let lastTime = -Infinity;
export const searchUsers = force => {
    const now = Date.now();
    if (lastTime + cacheTime < now || force) {
        store.dispatch({type: DATA.USERS_SEARCH});
        backend('admin/users')
            .then(receiveUsers)
            .catch(err => console.error(err)); // eslint-disable-line
        lastTime = now;
    }
};

export const receiveItems = items => {
    store.dispatch({type: DATA.ITEMS_RECEIVE, payload: items});
};

export const searchItems = () => {
    const values = store.getState().getIn('forms.items.search').toJS();
    store.dispatch({type: DATA.ITEMS_SEARCH});
    backend('admin/items/search', METHODS.POST, values)
        .then(receiveItems)
        .catch(err => console.error(err)); // eslint-disable-line
};

export const saveCurrentTimeAndLocation = () => {
    const action = store.getState().getIn('services.timeNextAction');
    const sessionUid = store.getState().getIn('session.info.uid');
    const timesRef = db.database().ref().child('times').child(sessionUid);
    const saveValues = position => {
        const {
            accuracy,
            altitude,
            altitudeAccuracy,
            heading,
            latitude,
            longitude,
            speed,
        } = position.coords;
        timesRef.push({
            action,
            timestamp: position.timestamp,
            gps: {
                accuracy,
                altitude,
                altitudeAccuracy,
                heading,
                latitude,
                longitude,
                speed,
            },
        });
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(saveValues);
    } else {
        saveValues({});
    }
};

export const updateTimes = times => store.dispatch({
    type: DATA.TIMES_UPDATE,
    payload: times || {},
});
