import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ListedUser = ({
    _id,
    firstName,
    lastName,
}) => (
    <Link to={`/users/edit/${_id}`} className="listed-element user">
        <h4>{firstName} {lastName}</h4>
    </Link>
);

ListedUser.propTypes = {
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};

export default ListedUser;
