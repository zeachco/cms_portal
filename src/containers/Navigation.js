import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ImmutableProps from 'react-immutable-proptypes';
import {Link} from 'react-router-dom';
import {noop} from 'node-noop';

import './Navigation.css';
import {disconnect} from '../store/actions/session';

const MenuItem = ({
    text,
    url,
    onClick = noop,
}) => (
    <li onClick={onClick}>
        <Link to={url}>
            {text}
        </Link>
    </li>
);

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
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
            <MenuItem key="users" url="users" text={l.get('users')} />,
            <MenuItem key="items" url="items" text={l.get('items')} />,
            <MenuItem key="profile" url="profile" text={displayName} />,
            <MenuItem key="logout" url="logout" text={l.get('logout')} onClick={disconnect} />
        );
    } else if (isChecking) {
        links.push(
            <li key="loading">
                <label>
                    Checking session...
                </label>
            </li>
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
    displayName: state.getIn('session.info.firstName') || state.getIn('session.info.email') || state.getIn('i18n.profile'),
    l: state.get('i18n'),
});

export default connect(mapStateToProps)(Navigation);
