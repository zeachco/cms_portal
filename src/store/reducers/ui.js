import {fromJS} from 'immutable-short-string-notation';

import {UI} from '../actionTypes';

export const defaultState = fromJS({
    editing: false,
});

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case UI.ACTIVATE_PANEL: return state
            .set('editing', true);

        case UI.CLOSE_PANEL: return state
            .set('editing', false);

        default: return state;
    }
};
