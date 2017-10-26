import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const DisplayName = ({displayName}) => <span>{displayName}</span>;

DisplayName.propTypes = {
    displayName: PropTypes.string.isRequired,
};

export default connect(state => ({
    displayName: state.getIn('session.info.firstName') || state.getIn('session.info.email') || state.getIn('i18n.strings.profile'),
}))(DisplayName);
