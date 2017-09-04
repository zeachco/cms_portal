import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import './ThreeColsLayout.css';
import Navigation from './Navigation';
import SearchPage from './SearchPage';
import EditPage from './EditPage';

const ThreeColsLayout = ({
    showLogin,
    detailed,
}) => (
    <div className={cx('tclMain', {detailed: detailed && !showLogin})}>
        <Navigation />
        <SearchPage />
        <EditPage />
    </div>
);

ThreeColsLayout.propTypes = {
    showLogin: PropTypes.bool.isRequired,
    detailed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    showLogin: !state.getIn('session.isAuth') && !state.getIn('session.retreivingSession'),
    detailed: state.getIn('ui.editing'),
});

export default connect(mapStateToProps)(ThreeColsLayout);
