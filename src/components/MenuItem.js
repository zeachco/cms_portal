import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'node-noop';
import {Link} from 'react-router-dom';

const MenuItem = ({
    text,
    url,
    onClick = noop,
    Icon,
}) => (
    <li onClick={onClick}>
        {Icon ? <Link to={'/' + url}>
            <Icon />{' '}
            <span className="no-mobile">{text}</span>
        </Link> : <Link to={'/' + url}>{text}</Link>
        }
    </li>
);

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    Icon: PropTypes.func,
};

export default MenuItem;
