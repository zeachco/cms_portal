import React, {Component} from 'react';
import autobind from 'auto-bind-es5';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';

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
                <h1>{this.props.i18n.get('users')}</h1>
                {this.state.items.map(user => <ListedUser key={user._id} {...user} />)}
            </SearchPage>
        );
    }
}

UserList.propTypes = {
    i18n: IProps.map,
};

export default connect(state => ({
    i18n: state.getIn('i18n.strings'),
}))(UserList);
