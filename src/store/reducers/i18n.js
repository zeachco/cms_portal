import {fromJS} from 'immutable-short-string-notation';

import {I18N} from '../actionTypes';
import fr from '../../i18n/fr';

const fallback = fr;

const channel = {
    fr,
};

export const defaultState = fromJS({
    languages: Object.keys(channel),
    strings: {...fallback},
});

export default (state = defaultState, {type, payload}) => {

    switch (type) {
        case I18N.CHANGE_LANGUAGE: return state.set('strings', fromJS(channel[payload] || fallback));
        default: return state;
    }
};
