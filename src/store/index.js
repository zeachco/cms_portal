import {createStore} from 'redux';

import {reducers} from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devTools);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const hotReducers = require('./reducers').default;
        store.replaceReducer(hotReducers, store.getState());
    });
}

export default store;
