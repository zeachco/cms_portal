import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Router = ({
    isAuth,
    detailed,
}) => {
    return (
        <div>
            {' ' + isAuth}
        </div>
    );
};

Router.propTypes = {

    isAuth: PropTypes.bool.isRequired,
    detailed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isAuth: state.getIn('session.isAuth'),
    detailed: state.getIn('ui.editing'),
});

export default connect(mapStateToProps)(Router);
