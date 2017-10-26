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

const timesRef = db.database().ref().child('times');
export const saveCurrentTimeAndLocation = ({
    customer = 'unknown',
}) => {
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
            customer,
        });
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(saveValues);
    } else {
        saveValues({});
    }
};

timesRef.on('value', snap => {
    store.dispatch({
        type: DATA.TIMES_UPDATE,
        payload: snap.val(),
    });
});
