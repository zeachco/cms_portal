import {fromJS} from 'immutable-short-string-notation';

import {SESSION} from '../actionTypes';

export const defaultState = fromJS({
    isAuth: false,
    retreivingSession: true,
});

export default (state = defaultState, {type, payload}) => {

    switch (type) {
        case SESSION.CHECK_SESSION: return state
            .setIn('retreivingSession', true);

        case SESSION.RECEIVE_SESSION: return state
            .setIn('retreivingSession', false)
            .setIn('isAuth', !!payload)
            .mergeDeepIn('info', payload);

        case SESSION.DISCONNECT: return state
            .setIn('retreivingSession', false)
            .setIn('isAuth', false)
            .deleteIn('info');

        default: return state;
    }
};
