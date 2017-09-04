import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ImmutableProps from 'react-immutable-proptypes';
import Exit from 'react-icons/lib/md/exit-to-app';
import Account from 'react-icons/lib/md/account-box';
import People from 'react-icons/lib/md/people-outline';
import Box from 'react-icons/lib/go/package';

import './Navigation.css';
import {disconnect} from '../store/actions/session';
import {changeLanguage} from '../store/actions/i18n';
import BusyServer from '../components/BusyServer';
import MenuItem from '../components/MenuItem';

const switchLang = lang => e => {
    e.preventDefault();
    changeLanguage(lang);
};


const Navigation = ({
    connected,
    isChecking,
    displayName,
    l,
    selectablesLangs,
}) => {
    const links = [];
    links.push(
        selectablesLangs.map(lang => (
            <li className="pull-right" key={'switch_to_+l'} onClick={switchLang(lang)}>
                <a className="no-desktop" href={lang} title={l.get(lang, lang)}>{l.get(lang + '_short', lang)}</a>
                <a className="no-mobile" href={lang} >{l.get(lang, lang)}</a>
            </li>
        ))
    );
    if (connected) {
        links.push(
            <MenuItem key="users" Icon={People} url="users" text={l.get('users')} />,
            <MenuItem key="items" Icon={Box} url="items" text={l.get('items')} />,
            <MenuItem key="profile" Icon={Account} url="profile" text={displayName} />,
            <MenuItem key="logout" Icon={Exit} url="/" text={l.get('logout')} onClick={disconnect} />
        );
    } else if (isChecking) {
        links.push(
            <li key="loading">
                <BusyServer />
            </li>
        );
    } else {
        links.push(
            <li key="loading">
                <label>{l.get('login')}</label>
            </li>
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
    selectablesLangs: ImmutableProps.list.isRequired,
};

const mapStateToProps = state => ({
    connected: state.getIn('session.isAuth'),
    isChecking: state.getIn('session.retreivingSession'),
    displayName: state.getIn('session.info.firstName') || state.getIn('session.info.email') || state.getIn('i18n.strings.profile'),
    l: state.getIn('i18n.strings'),
    selectablesLangs: state.getIn('i18n.selectables'),
});

export default connect(mapStateToProps)(Navigation);
