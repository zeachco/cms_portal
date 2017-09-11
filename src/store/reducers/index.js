import {Map} from 'immutable-short-string-notation';

import session from './session';
import i18n from './i18n';
import router from './router';
import services from './services';

const reducers = {
    session,
    i18n,
    router,
    services,
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
