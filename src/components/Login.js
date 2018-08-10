import React from 'react';
import {observer} from 'mobx-react';

import state from 'src/store/state';
import {login} from 'src/store/actions/session';
import {l} from 'src/utils/i18n';

const _handleSubmit = e => {
    e.preventDefault();
    login(state.forms.login.user, state.forms.login.pass);
};

const _handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    state.forms.login[name] = value;
};

const Login = () => (
    <form onSubmit={_handleSubmit} onChange={_handleChange} className="cmsForm" style={{maxWidth: 300}}>
        <h2>{l('pleaseConnect')}</h2>
        <label className="field">
            <input
                name="user"
                placeholder={l('username')}
                value={state.forms.login.user}
                autoFocus
                disabled={state.session.retreivingSession}
            />
        </label>
        <label className="field">
            <input
                ref={this.refPass}
                name="pass"
                placeholder={l('password')}
                value={state.forms.login.pass}
                type="password"
                disabled={state.session.retreivingSession}
            />
        </label>
        <label className="field">
            <input type="submit" value={l('login')} disabled={state.session.retreivingSession} />
        </label>
    </form>
);

export default observer(Login);
