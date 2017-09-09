import store from '..';
import {CORE} from '../actionTypes';

export const setCurrentRoute = routeProps => store.dispatch({type: CORE.ROUTE_CHANGE, payload: routeProps});
