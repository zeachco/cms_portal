import store from '../';
import {I18N} from '../actionTypes';

export const changeLanguage = i18nFile => store.dispatch({type: I18N.CHANGE_LANGUAGE, payload: i18nFile});
