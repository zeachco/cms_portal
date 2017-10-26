import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {noop} from 'node-noop';
import {Link} from 'react-router-dom';

const MenuItem = ({
    label,
    url,
    onClick = noop,
    Icon,
    page,
    component: Component,
    className,
}) => {
    const text = typeof Component === 'function' ? <Component /> : label;
    return (
        <li className={cx(className, {current: page === url.split('/')[0]})} onClick={onClick}>
            {Icon ? <Link to={'/' + url}>
                <Icon />{' '}
                <span className="no-mobile">{text}</span>
            </Link> : <Link to={'/' + url}>{text}</Link>
            }
        </li>
    );
};

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    Icon: PropTypes.func,
    page: PropTypes.string.isRequired,
    component: PropTypes.func,
    className: PropTypes.string,
};

export default connect(state => ({
    page: state.getIn('router.params.page'),
}))(MenuItem);
