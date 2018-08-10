import React from 'react';
import {connect} from 'react-redux';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import IProps from 'react-immutable-proptypes';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {saveCurrentTimeAndLocation} from '../../store/actions/services';
import TimeReference from '../common/TimeReference.react';
import {l} from 'src/utils/i18n';

const handleButtonClick = e => {
    e.preventDefault();
    e.stopPropagation();
    saveCurrentTimeAndLocation();
};

const ListedTime = styled.div`
    padding: 5px;
    background: #eee;
    margin-bottom: 5px;
    border-radius: 3px;
    &:before {
        content: ' ';
        display: inline-block;
        margin-right: 3px;
        float: right;
        width: 1.5em;
        height: 1em;
        background: ${({action}) => action === 'start' ? '#0d8' : '#f88'};
        border-radius: 1em;
        box-shadow: 0 0 1px black;
    }
`;

const StartStop = styled.button`
    max-width: 250px;
    padding: 10px;
    margin: 10px auto 20px;
    background: ${({action}) => action === 'start' ? '#0d8' : '#f88'};
    border: 1px solid #666;
    display: block;
    border-radius: 3px;
    width: 100%;
    color: white;
    font-weight: bold;
    text-shadow: 0 0 1px black;
    font-size: 1.6em;
`;

const TrackerDashboard = ({
    times,
    nextAction,
}) => {
    const timesJsx = [];
    times.forEach((time, key) => {
        timesJsx.push(
            <ListedTime key={key} action={time.get('action')}>
                <Link to={'/tracker/edit/' + key}><TimeReference timestamp={time.get('timestamp')} /></Link>
            </ListedTime>
        );
    });
    return (
        <div>
            <StartStop action={nextAction} onClick={handleButtonClick}>{l(nextAction, '--')}</StartStop>
            {timesJsx}
        </div>
    );
};

TrackerDashboard.propTypes = {
    times: IProps.map,
    nextAction: PropTypes.string,
};

const mapStateToProps = state => ({
    times: state.getIn('services.times'),
    nextAction: state.getIn('services.timeNextAction'),
});

export default connect(mapStateToProps)(observer(TrackerDashboard));
