import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Info = styled.div`
float: right;
font-size: .8em;
color: #333;
text-align: right;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
max-width: 30%;
`;

const ListedUser = ({
    _id,
    code,
    space,
    shortDescription,
    labels,
    // ...attributes
}) => (
    <Link to={`/items/edit/${_id}`} className="listed-element item">
        <div>
            <Info>
                {space}<br />
                {labels.join(', ')}

            </Info>

            <strong>{code}</strong><br />
            <small>{shortDescription}</small>
        </div>
        {/* {JSON.stringify(attributes)} */}
    </Link>
);

ListedUser.propTypes = {
    _id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    space: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
};

export default ListedUser;
