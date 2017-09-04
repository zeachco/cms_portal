import {fromJS} from 'immutable-short-string-notation';

import {SESSION, UI} from '../actionTypes';

export const defaultState = fromJS({
    session: {
        isAuth: false,
        retreivingSession: true,
    },
    ui: {
        editing: false,
    },
    i18n: {
        home: 'Acceuil',
        users: 'Utilisateur',
        items: 'Articles',
    },
});

export const reducers = (state = defaultState, {type, payload}) => {

    switch (type) {
        case SESSION.CHECK_SESSION: return state
            .setIn('session.retreivingSession', true);

        case SESSION.RECEIVE_SESSION: return state
            .setIn('session.retreivingSession', false)
            .setIn('session.isAuth', !!payload)
            .mergeDeepIn('session.info', payload);

        case SESSION.DISCONNECT: return state
            .setIn('session.retreivingSession', false)
            .setIn('session.isAuth', false)
            .deleteIn('session.info');

        case UI.ACTIVATE_PANEL: return state
            .setIn('ui.editing', true);

        case UI.CLOSE_PANEL: return state
            .setIn('ui.editing', false);

        default: return state;
    }
};
