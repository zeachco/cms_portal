import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import autobind from 'auto-bind-es5';
import Cog from 'react-icons/lib/fa/cog';

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
        if (this.props.retreivingSession) {
            return (
                <div>
                    <Cog className="spin" />{' '}
                    <span>Retriving session...</span>
                </div>
            );
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Please connect</h2>
                <div className="">
                    <label>Username</label>
                    <input ref={this.refUser} autoFocus />
                </div>
                <div className="" >
                    <label>Password</label>
                    <input ref={this.refPass} type="password" />
                </div>
                <div className="" >
                    <input type="submit" value="Login" />
                </div>
            </form>
        );
    }
}

Login.propTypes = {
    retreivingSession: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    retreivingSession: state.getIn('session.retreivingSession'),
});

export default connect(mapStateToProps)(Login);
