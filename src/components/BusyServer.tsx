import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cog from 'react-icons/lib/fa/cog';
import styled from 'styled-components';

const Spinning = styled.label`
@keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(90deg)}
}

.busyServer {
    animation: spin .5s infinite linear;
}
`;

interface IProps {
    text: string
}

const BusyServer = ({
    text,
}): React.SFC<IProps> => (
    <Spinning>
        <Cog className="busyServer" />{' '}
        <span>{text}</span>
    </Spinning>
);

BusyServer.propTypes = {
    text: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    text: state.getIn('i18n.strings.busyServer'),
});

export default connect(mapStateToProps)(BusyServer)
;
