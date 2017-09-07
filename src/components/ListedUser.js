import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './ListedUser.css';

const ListedUser = ({
    _id,
    firstName,
    lastName,
}) => (
    <Link to={`/users/${_id}`} className="listed-user">
        <h4>{firstName} {lastName}</h4>
    </Link>
);

ListedUser.propTypes = {
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};

export default ListedUser;
