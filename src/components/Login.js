import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import autobind from 'auto-bind-es5';

import './Login.css';
import {login} from '../store/actions/session';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        autobind(this);
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
            <form onSubmit={this.handleSubmit} className="loginContainer">
                <h2>{l.get('pleaseConnect')}</h2>
                <div className="field">
                    <label>{l.get('username')} <input ref={this.refUser} autoFocus disabled={retreivingSession} /></label>
                </div>
                <div className="field" >
                    <label>{l.get('password')} <input ref={this.refPass} type="password" disabled={retreivingSession} /></label>
                </div>
                <div className="field" >
                    <input type="submit" value={l.get('login')} disabled={retreivingSession} />
                </div>
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
