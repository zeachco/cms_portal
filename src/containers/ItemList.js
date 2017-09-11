import React from 'react';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';

import SearchPage from './SearchPage';
import ListedItem from '../components/ListedItem';

const UserList = ({
    i18n,
    items,
}) => (
    <SearchPage>
        <h1>{i18n.get('items')}</h1>
        {items.toJS().filter((m, i) => i < 100).map(item => <ListedItem key={item._id} {...item} />)}
    </SearchPage>
);

UserList.propTypes = {
    i18n: IProps.map,
    items: IProps.list,
};

export default connect(state => ({
    i18n: state.getIn('i18n.strings'),
    items: state.getIn('services.items'),
}))(UserList);
