import {fromJS} from 'immutable-short-string-notation';

import {I18N} from '../actionTypes';
import fr from '../../i18n/fr';
import en from '../../i18n/en';

const defaultLang = 'fr';

const channel = {
    fr,
    en,
};

export const defaultState = fromJS({
    requested: defaultLang,
    selectables: [],
    languages: Object.keys(channel),
    strings: {...channel[defaultLang]},
});

export default (state = defaultState, {type, payload}) => {

    switch (type) {
        case I18N.CHANGE_LANGUAGE: return state
            .set('requested', payload)
            .set('selectables', fromJS(state.getIn('languages').filter(l => l !== payload)))
            .set('strings', fromJS(channel[payload] || channel[defaultLang]));

        default: return state;
    }
};
