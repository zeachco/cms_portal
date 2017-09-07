import React, {Component} from 'react';
import autobind from 'auto-bind-es5';

import SearchPage from './SearchPage';
import {backend} from '../services/api';
import ListedUser from '../components/ListedUser';

class UserList extends Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        backend('admin/users').then(items => this.setState({items}));
    }

    render() {
        return (
            <SearchPage>
                <h1>Users</h1>
                {this.state.items.map(user => <ListedUser key={user._id} {...user} />)}
            </SearchPage>
        );
    }
}

// TODO redux and i18n

export default UserList;
