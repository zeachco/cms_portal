import {fromJS, Map} from 'immutable-short-string-notation';

import {CORE} from '../actionTypes';

export default (state = Map(), {type, payload}) => {
    if (type === CORE.ROUTE_CHANGE) {
        return state.setIn('params', fromJS(payload));

    } else {
        return state;
    }
};
