import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import IProps from 'react-immutable-proptypes';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {saveCurrentTimeAndLocation} from '../../store/actions/services';
import TimeReference from '../common/TimeReference.react';

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
    padding: 10px;
    margin: 5px 0;
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

const Time = (time, key) => {
    return (
        <ListedTime action={time.get('action')}>
            <Link to={'/tracker/edit/' + key}><TimeReference timestamp={time.get('timestamp')} /></Link>
        </ListedTime>
    );
};

const TrackerDashboard = ({
    times,
    nextAction,
    l,
}) => {
    return (
        <div>
            <StartStop action={nextAction} onClick={handleButtonClick}>{l.get(nextAction, '--')}</StartStop>
            {times && times.map(Time)}
        </div>
    );
};

TrackerDashboard.propTypes = {
    times: IProps.map,
    nextAction: PropTypes.string,
    l: IProps.map,
};

const mapStateToProps = state => ({
    times: state.getIn('services.times'),
    nextAction: state.getIn('services.timeNextAction'),
    l: state.getIn('i18n.strings'),
});

export default connect(mapStateToProps)(TrackerDashboard);
