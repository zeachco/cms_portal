import React from 'react';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';

import SearchPage from './SearchPage';
import ListedUser from '../components/ListedUser';
import {searchUsers} from '../store/actions/services';
import {l} from 'src/utils/i18n';

const refresh = e => {
    e.preventDefault();
    searchUsers(true);
};

const UserList = ({
    users,
}) => {
    searchUsers();
    return (
        <SearchPage>
            <h1>{l('users')}</h1>
            <input
                name="users.filter"
                type="text"
            />
            <a href="refresh" onClick={refresh}>{l('refresh_list')}</a>
            {users.toJS().map(user => <ListedUser key={user._id} {...user} />)}
        </SearchPage>
    );
};

UserList.propTypes = {
    users: IProps.list,
};

export default connect(state => ({
    users: state.getIn('services.users'),
}))(UserList);
