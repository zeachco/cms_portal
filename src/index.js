import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import './theme/style.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {changeLanguage} from './store/actions/i18n';
import {setCurrentRoute} from './store/actions/router';

const mount = () => {
    const App = require('./containers/App').default;

    const RouterRegisterer = ({match}) => {
        if (match.isExact) setCurrentRoute(match.params);
        return null;
    };

    RouterRegisterer.propTypes = {
        match: PropTypes.object.isRequired,
        isExact: PropTypes.bool,
    };

    render(
        <Provider store={store}>
            <Router>
                <div id="tclApp">
                    <Route exact path={'/'} component={RouterRegisterer} />
                    <Route exact path={'/:page'} component={RouterRegisterer} />
                    <Route exact path={'/:page/edit/:id'} component={RouterRegisterer} />
                    <Route exact path={'/:page/search/:field/:value'} component={RouterRegisterer} />
                    <App />
                </div>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};
mount();

if (navigator && navigator.languages) {
    changeLanguage(navigator.languages[0].split('-')[0]);
}

if (module.hot) module.hot.accept('./containers/App', mount);
registerServiceWorker();
