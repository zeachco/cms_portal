import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import IProps from 'react-immutable-proptypes';

const Tracker = ({
    time,
    id,
}) => (
    <div>
        <small>{id}</small>
        <pre>{JSON.stringify(time.toJS(), null, 2)}</pre>
    </div>
);

Tracker.propTypes = {
    time: IProps.map.isRequired,
    id: PropTypes.string.isRequired,
};

const mapStateToprops = state => {
    const id = state.getIn('router.params.id');
    return {
        id,
        time: state.getIn('services.times.' + id),
    };
};

export default connect(mapStateToprops)(Tracker);
