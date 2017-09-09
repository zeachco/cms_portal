import React, {Component} from 'react';
import autobind from 'auto-bind-es5';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';

import SearchPage from './SearchPage';
import {backend} from '../services/api';
import ListedItem from '../components/ListedItem';

class UserList extends Component {
    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        backend('admin/items/search/new').then(items => this.setState({items}));
    }

    render() {
        return (
            <SearchPage>
                <h1>{this.props.i18n.get('items')}</h1>
                {this.state.items.filter((m, i) => i < 100).map(item => <ListedItem key={item._id} {...item} />)}
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
