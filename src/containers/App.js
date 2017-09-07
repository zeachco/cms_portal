import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';


import {setCurrentRoute} from '../store/actions/router';
import ThreeColsLayout from './ThreeColsLayout';


const RouterRegisterer = ({match}) => {
    setCurrentRoute(match.params);
    return <ThreeColsLayout />;
};

RouterRegisterer.propTypes = {
    match: PropTypes.object.isRequired,
};

const App = () => <Route path={'/:list?/:id?'} component={RouterRegisterer} />;

export default App;
