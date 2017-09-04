import {Map} from 'immutable-short-string-notation';

import session from './session';
import ui from './ui';
import i18n from './i18n';

const reducers = {
    session,
    ui,
    i18n,
};

export default (state = Map(), action) => {
    let lastState = state;

    // loop all other sub reducers
    for (const namespace in reducers) {
        const reducer = reducers[namespace];
        const newState = reducer(lastState.get(namespace), action, state, namespace);
        lastState = lastState.set(namespace, newState);
    }

    return lastState;
};
