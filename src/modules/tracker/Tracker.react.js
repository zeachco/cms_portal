import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import IProps from 'react-immutable-proptypes';

const Tracker = ({
    time,
    key,
}) => (
    <div>
        <h1>Tracker <small>{key}</small></h1>
        <pre>{JSON.stringify(time.toJS(), null, 2)}</pre>
    </div>
);

Tracker.propTypes = {
    time: IProps.map.isRequired,
    key: PropTypes.string.isRequired,
};

const mapStateToprops = state => {
    const id = state.getIn('router.params.id');
    return {
        time: state.getIn('services.times.' + id),
    };
};

export default connect(mapStateToprops)(Tracker);
