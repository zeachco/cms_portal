import React from 'react';
import {observer} from 'mobx-react';
import Cog from 'react-icons/lib/fa/cog';
import styled from 'styled-components';
import {l} from 'src/utils/i18n';

const Spinning = styled.label`
@keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(90deg)}
}

.busyServer {
    animation: spin .5s infinite linear;
}
`;

const BusyServer = () => (
    <Spinning>
        <Cog className="busyServer" />{' '}
        <span>{l('busyServer')}</span>
    </Spinning>
);

export default observer(BusyServer);
