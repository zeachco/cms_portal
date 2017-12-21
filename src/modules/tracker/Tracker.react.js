import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

const Tracker = ({
    timestamp,
    id,
}) => (
    <div>
        <h2>
            {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
        </h2>
        <small>{id}</small>
    </div>
);

Tracker.propTypes = {
    timestamp: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
};

const mapStateToprops = state => {
    const id = state.getIn('router.params.id');
    return {
        id,
        timestamp: state.getIn(`services.times.${id}.timestamp`, 0),
    };
};

export default connect(mapStateToprops)(Tracker);
