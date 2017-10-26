import {fromJS} from 'immutable-short-string-notation';

import {DATA} from '../actionTypes';

const defaultState = fromJS({
    users: [],
    items: [],
    times: {},
});

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case DATA.USERS_RECEIVE: return state.setIn('users', fromJS(payload));
        case DATA.ITEMS_RECEIVE: return state.setIn('items', fromJS(payload));
        case DATA.TIMES_UPDATE: return state.setIn('times', fromJS(payload).sort((a, b) => b.get('timestamp') - a.get('timestamp')));
        default: return state;
    }
};
