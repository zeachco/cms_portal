import {connect} from 'react-redux';

export const formConnect = (props, Component) => {
    const mapStateToProps = state => {
        formValues: state.getIn('forms.' + props.form);
    };
    return connect(mapStateToProps)(Component);
};
