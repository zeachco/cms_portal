import React from 'react';
import PropTypes from 'prop-types';
import Close from 'react-icons/lib/fa/close';
import {noop} from 'node-noop';
import styled from 'styled-components';

const CloseButtonStyle = styled.div`
    cursor: pointer;
    font-size: 1.75em;
    color: #600;

    &:hover,
    &:focus {
        color: red;
    }

    &:active {
        color: #000;
    }
`;

const CloseButton = ({
    onClick = noop,
}) => (
    <CloseButtonStyle onClick={onClick} ><Close /></CloseButtonStyle>
);

CloseButton.propTypes = {
    onClick: PropTypes.func,
};

export default CloseButton;
