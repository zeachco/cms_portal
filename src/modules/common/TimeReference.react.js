import React, {Component} from 'react';
import {observer} from 'mobx-react';
import autobind from 'auto-bind-es5';
import PropTypes from 'prop-types';
import moment from 'moment';
import state from 'src/store/state';

const UPDATE_FREQ = 3000;

class TimeReference extends Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            reference: moment(props.timestamp).locale(state.i18n.requested).fromNow(),
        };
    }

    componentDidMount() {
        clearTimeout(this.updateTimeout);
        setTimeout(this.updateTime, UPDATE_FREQ);
    }

    componentWillUnmount() {
        clearTimeout(this.updateTimeout);
    }

    updateTime() {
        this.setState({
            reference: moment(this.props.timestamp).locale(state.i18n.requested).fromNow(),
        });
        clearTimeout(this.updateTimeout);
        setTimeout(this.updateTime, UPDATE_FREQ);
    }

    render() {
        return <span>{this.state.reference}</span>;
    }
}

TimeReference.propTypes = {
    timestamp: PropTypes.number.isRequired,
};

export default observer(TimeReference);
