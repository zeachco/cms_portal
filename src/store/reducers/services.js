import {fromJS} from 'immutable-short-string-notation';

import {DATA} from '../actionTypes';

const defaultState = fromJS({
    users: [],
    items: [],
    times: {},
    timeNextAction: 'start',
});

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case DATA.USERS_RECEIVE: return state.setIn('users', fromJS(payload));
        case DATA.ITEMS_RECEIVE: return state.setIn('items', fromJS(payload));
        case DATA.TIMES_UPDATE:
            const sorted = fromJS(payload || {}).sort((a, b) => b.get('timestamp') - a.get('timestamp'));
            const first = sorted.first() || fromJS({});
            const nextAction = first.get('action') === 'start' ? 'stop' : 'start';
            return state
                .setIn('times', sorted)
                .setIn('timeNextAction', nextAction)
            ;
        default: return state;
    }
};
