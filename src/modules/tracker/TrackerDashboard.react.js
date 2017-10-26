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
        margin-right: 5px;
        width: 1em;
        height: 1em;
        background: ${({action}) => action === 'start' ? 'green' : 'red'};
    }
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
            <h1>Dashboard</h1>
            <button onClick={handleButtonClick}>{l.get(nextAction, '--')}</button>
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
