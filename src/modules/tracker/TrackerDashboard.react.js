import React from 'react';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';
import {Link} from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

import {saveCurrentTimeAndLocation} from '../../store/actions/services';

const ListedTime = styled.div`
    padding: 5px;
    background: #eee;
    margin-bottom: 5px;
    border-radius: 3px;
`;

const Time = (time, key) => {
    const d = moment(time.get('timestamp'));
    return (
        <ListedTime>
            <Link to={'/tracker/edit/' + key}>{d.fromNow()}</Link>
        </ListedTime>
    );
};


const TrackerDashboard = ({
    times,
}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={saveCurrentTimeAndLocation}>Save current time</button>
            {times && times.map(Time)}
        </div>
    );
};

TrackerDashboard.propTypes = {
    times: IProps.map,
};

const mapStateToProps = state => ({
    times: state.getIn('services.times'),
});

export default connect(mapStateToProps)(TrackerDashboard);
