import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

import './theme/style.css';
import store from './store';
import {checkSession} from './store/actions/session';
import {changeLanguage} from './store/actions/i18n';
// import registerServiceWorker from './registerServiceWorker';

const mount = () => {
    const App = require('./containers/ThreeColsLayout').default;
    render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};
mount();
checkSession();

if (navigator && navigator.languages) {
    changeLanguage(navigator.languages[0].split('-')[0]);
}

if (module.hot) module.hot.accept('./containers/ThreeColsLayout', mount);
// registerServiceWorker();

