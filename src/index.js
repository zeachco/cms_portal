import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

import './theme/style.css';
import store from './store';
import {checkSession} from './store/actions/session';
import {changeLanguage} from './store/actions/i18n';
import registerServiceWorker from './registerServiceWorker';
// import { Router, Route, Switch } from 'react-router'

const mount = () => {
    const ThreeColsLayout = require('./containers/ThreeColsLayout').default;
    render(
        <Provider store={store}>
            <Router>
                <ThreeColsLayout />
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
registerServiceWorker();
