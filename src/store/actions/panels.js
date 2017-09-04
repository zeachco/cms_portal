import store from '..';
import {UI} from '../actionTypes';

export const openPanel = itemId => store.dispatch({type: UI.ACTIVATE_PANEL, payload: itemId});
export const closePanel = () => store.dispatch({type: UI.CLOSE_PANEL});
