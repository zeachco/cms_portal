import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cog from 'react-icons/lib/fa/cog';

import './BusyServer.css';

const BusyServer = ({
    text,
}) => (
    <label>
        <Cog className="busyServer" />{' '}
        <span>{text}</span>
    </label>
);

BusyServer.propTypes = {
    text: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    text: state.getIn('i18n.strings.busyServer'),
});

export default connect(mapStateToProps)(BusyServer)
;
