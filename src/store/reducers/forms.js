import {fromJS} from 'immutable-short-string-notation';

import {FORM} from '../actionTypes';

const defaultState = fromJS({
    items: {
        search: ''
    }
});

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case FORM.CHANGE_FIELD: return state.setIn(payload.key, payload.value);
        default: return state;
    }
};
