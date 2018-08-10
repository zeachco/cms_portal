import {Map} from 'immutable-short-string-notation';

import router from './router';
import services from './services';
import forms from './forms';

const reducers = {
    router,
    services,
    forms,
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
