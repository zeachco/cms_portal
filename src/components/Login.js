import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import autobind from 'auto-bind-es5';

import {login} from '../store/actions/session';

class Login extends Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {};
    }

    refUser(el) {
        this.user = el;
    }

    refPass(el) {
        this.pass = el;
    }

    handleSubmit(e) {
        e.preventDefault();
        login(this.user.value, this.pass.value);
    }

    render() {
        const {retreivingSession, l} = this.props;
        return (
            <form onSubmit={this.handleSubmit} className="cmsForm" style={{maxWidth: 300}}>
                <h2>{l.get('pleaseConnect')}</h2>
                <label className="field">
                    <input ref={this.refUser} placeholder={l.get('username')} autoFocus disabled={retreivingSession} />
                </label>
                <label className="field">
                    <input ref={this.refPass} placeholder={l.get('password')} type="password" disabled={retreivingSession} />
                </label>
                <label className="field">
                    <input type="submit" value={l.get('login')} disabled={retreivingSession} />
                </label>
            </form>
        );
    }
}

Login.propTypes = {
    retreivingSession: PropTypes.bool.isRequired,
    l: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    retreivingSession: state.getIn('session.retreivingSession'),
    l: state.getIn('i18n.strings'),
});

export default connect(mapStateToProps)(Login);
