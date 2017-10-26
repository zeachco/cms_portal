import store from '..';
import {FORM} from '../actionTypes';

export const set = (key, value) => store.dispatch({type: FORM.CHANGE_FIELD, payload: {key, value}});
