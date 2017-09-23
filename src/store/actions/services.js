import store from '..';
import {DATA} from '../actionTypes';
import {backend} from '../../services/api';

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

export const searchItems = params => {
    store.dispatch({type: DATA.USERS_SEARCH});
    backend('admin/users')
        .then(receiveUsers)
        .catch(err => console.error(err)); // eslint-disable-line
};
