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

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

const Navigation = ({
    connected,
    isChecking,
    displayName,
    l,
}) => {
    const links = [];
    if (connected) {
        links.push(
            `Hello ${displayName}!`,
            <MenuItem key="users" url="users" text={l.get('users')} />,
            <MenuItem key="items" url="items" text={l.get('items')} />,
            <MenuItem key="logout" url="logout" text={l.get('logout')} />
        );
    } else if (isChecking) {
        links.push(
            'Checking session...'
        );
    } else {
        links.push(
            <MenuItem key="login" url="login" text={l.get('login')} />
        );
    }
    return (
        <nav className="tclNav">
            {links}
        </nav>
    );
};

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
