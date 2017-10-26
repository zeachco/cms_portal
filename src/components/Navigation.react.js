import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import IProps from 'react-immutable-proptypes';
import Exit from 'react-icons/lib/md/exit-to-app';
import styled from 'styled-components';

import {logout} from '../store/actions/session';
import {changeLanguage} from '../store/actions/i18n';
import BusyServer from '../components/BusyServer';
import MenuItem from '../components/MenuItem';
import modules from '../modules/listing';

const switchLang = lang => e => {
    e.preventDefault();
    changeLanguage(lang);
};

const radius = '.5em';

const MenuContainer = styled.nav`
li a,
li label {
    padding: .5em 1em;
    color: #ddd;
    text-decoration: none;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: ${radius};
}

li a:hover {
    color: white;
    background: rgba(255, 255, 255, .1);
}

li.current{
    background: rgba(32, 32, 32, .9);
    border-radius: ${radius};
    box-shadow: inset -1px 2px -1px black, -1px 1px 2px -1px white;
}

li.pull-right {
    float: right;
}

@media only screen and (min-width: 800px) {
    li {
        display: block;
        float: none !important;
    }
}`;

const Navigation = ({
    connected,
    isChecking,
    l,
    selectablesLangs,
    enabledModules,
}) => {
    const links = [];
    if (connected) {
        enabledModules.forEach(name => {
            const module = modules[name];
            links.push(
                <MenuItem
                    key={name}
                    Icon={module.icon}
                    url={module.path}
                    label={l.get(name)}
                    component={module.labelComponent}
                />
            );
        });
        links.push(
            <MenuItem
                key="logout"
                Icon={Exit}
                url=""
                label={l.get('logout')}
                onClick={logout}
            />
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
    links.push(
        selectablesLangs.map(lang => (
            <li className="pull-right" key={'switch_to_+l'} onClick={switchLang(lang)}>
                <a className="no-desktop" href={lang} title={l.get(lang, lang)}>{l.get(lang + '_short', lang)}</a>
                <a className="no-mobile" href={lang} >{l.get(lang, lang)}</a>
            </li>
        ))
    );
    return (
        <MenuContainer className="tclNav">
            {links}
        </MenuContainer>
    );
};

Navigation.propTypes = {
    connected: PropTypes.bool.isRequired,
    isChecking: PropTypes.bool.isRequired,
    l: IProps.map.isRequired,
    selectablesLangs: IProps.list.isRequired,
    enabledModules: IProps.list,
};

const mapStateToProps = state => ({
    connected: state.getIn('session.isAuth'),
    isChecking: state.getIn('session.retreivingSession'),
    l: state.getIn('i18n.strings'),
    selectablesLangs: state.getIn('i18n.selectables'),
    enabledModules: state.getIn('session.enabledModules'),
});

export default connect(mapStateToProps)(Navigation);
