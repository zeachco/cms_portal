import {fromJS} from 'immutable-short-string-notation';

import {DATA} from '../actionTypes';

const defaultState = fromJS({
    users: [],
    items: [],
});

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case DATA.USERS_RECEIVE: return state.setIn('users', fromJS(payload));
        case DATA.ITEMS_RECEIVE: return state.setIn('items', fromJS(payload));
        default: return state;
    }
};
