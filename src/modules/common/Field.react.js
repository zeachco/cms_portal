import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {set} from '../../store/actions/forms';

const Field = ({
    component,
    value,
    path,
    children,
    ...attrs
}) => {
    attrs.onChange = e => {
        set(path, e.target.value);
    };
    attrs.name = path;
    attrs.value = value;
    // cleaning the object
    delete attrs.dispatch;
    // create the field
    return React.createElement(component, attrs, children);
};

Field.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]).isRequired,
    path: PropTypes.string.isRequired,
    value: PropTypes.any,
};

export default connect((state, props) => ({
    value: state.getIn('forms.' + props.path, props.default),
}))(Field);
