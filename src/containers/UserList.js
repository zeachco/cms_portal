import React from 'react';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';
import {Field} from 'redux-form';

import SearchPage from './SearchPage';
import ListedUser from '../components/ListedUser';
import {searchUsers} from '../store/actions/services';

const refresh = e => {
    e.preventDefault();
    searchUsers(true);
};

const UserList = ({
    i18n,
    users,
}) => {
    searchUsers();
    return (
        <SearchPage>
            <h1>{i18n.get('users')}</h1>
            <Field
                name="users.filter"
                component="input"
                type="text"
            />
            <a href="refresh" onClick={refresh}>{i18n.get('refresh_list')}</a>
            {users.toJS().map(user => <ListedUser key={user._id} {...user} />)}
        </SearchPage>
    );
};

UserList.propTypes = {
    i18n: IProps.map,
    users: IProps.list,
};

export default connect(state => ({
    i18n: state.getIn('i18n.strings'),
    users: state.getIn('services.users'),
}))(UserList);
