import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ImmutableProps from 'react-immutable-proptypes';
import {Link} from 'react-router-dom';

import './Navigation.css';

const MenuItem = ({
    text,
    url,
}) => (
    <li><Link to={url}>{text}</Link></li>
);

const Navigation = ({
    connected,
    isChecking,
    displayName,
    l,
}) => (
    <nav className="tclNav">
        <MenuItem url="" text={l.get('home')} />
        <MenuItem url="users" text={l.get('users')} />
        <MenuItem url="items" text={l.get('items')} />
        <MenuItem url="profile" text={connected ? displayName : isChecking ? 'Connecting...' : 'please connect'} />
    </nav>
);

Navigation.propTypes = {
    connected: PropTypes.bool.isRequired,
    isChecking: PropTypes.bool.isRequired,
    displayName: PropTypes.string.isRequired,
    l: ImmutableProps.map.isRequired,
};

const mapStateToProps = state => ({
    connected: state.getIn('session.isAuth'),
    isChecking: state.getIn('session.retreivingSession'),
    displayName: state.getIn('session.info.firstName') || state.getIn('session.info.email') || state.getIn('session.info.userKey', 'you'),
    l: state.get('i18n'),
});

export default connect(mapStateToProps)(Navigation);
