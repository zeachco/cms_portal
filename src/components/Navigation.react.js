import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import IProps from 'react-immutable-proptypes';
import Exit from 'react-icons/lib/md/exit-to-app';

import './Navigation.css';
import {logout} from 'src/store/actions/session';
import BusyServer from 'src/components/BusyServer';
import MenuItem from 'src/components/MenuItem';
import modules from 'src/modules/listing';
import {l} from 'src/utils/i18n';
import state from 'src/store/state';
import LangSelector from 'src/components/LangSelector.react';

const Navigation = ({
    connected = state.session.isAuth,
    isChecking = state.session.retreivingSession,
    enabledModules = state.session.enabledModules,
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
                    label={l(name)}
                    component={module.labelComponent}
                />
            );
        });
        links.push(
            <MenuItem
                key="logout"
                Icon={Exit}
                url=""
                label={l('logout')}
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
                <label>{l('login')}</label>
            </li>
        );
    }
    links.push(
        <LangSelector />
    );
    return (
        <div className="tclNav menu-container">
            {links}
        </div>
    );
};

Navigation.propTypes = {
    connected: PropTypes.bool.isRequired,
    isChecking: PropTypes.bool.isRequired,
    enabledModules: IProps.list,
};

export default observer(Navigation);
