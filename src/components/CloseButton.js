import React from 'react';
import PropTypes from 'prop-types';
import Close from 'react-icons/lib/fa/close';
import {noop} from 'node-noop';

import './CloseButton.css';

const CloseButton = ({
    onClick = noop,
}) => (
    <div className="close-button" onClick={onClick} ><Close /></div>
);

CloseButton.propTypes = {
    onClick: PropTypes.func,
};

export default CloseButton;
