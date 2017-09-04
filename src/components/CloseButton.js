import React from 'react';
import PropTypes from 'prop-types';
import Close from 'react-icons/lib/fa/close';

import './CloseButton.css';

const CloseButton = ({
    onClick,
}) => (
    <div className="close-button" onClick={onClick} ><Close /></div>
);

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CloseButton;
