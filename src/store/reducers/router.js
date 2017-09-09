import {fromJS, Map} from 'immutable-short-string-notation';

import {CORE} from '../actionTypes';

const routeToState = (state = Map(), {type, payload}) => type === CORE.ROUTE_CHANGE ? state.setIn('params', fromJS(payload)) : state;

export default routeToState;
