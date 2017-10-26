import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'auto-bind-es5';
import PropTypes from 'prop-types';
import moment from 'moment';

const UPDATE_FREQ = 3000;

class TimeReference extends Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            reference: moment(props.timestamp).locale(props.lang).fromNow(),
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
            reference: moment(this.props.timestamp).locale(this.props.lang).fromNow(),
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
    lang: PropTypes.string.isRequired,
};

export default connect(state => ({
    lang: state.getIn('i18n.requested'),
}))(TimeReference);
