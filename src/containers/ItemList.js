import React from 'react';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';

import SearchPage from './SearchPage';
import ListedItem from '../components/ListedItem';

import {searchItems} from '../store/actions/services';
import {set} from '../store/actions/forms';

const handleSearch = e => {
    e.preventDefault();
    searchItems();
}

const handleSearchTyping = e => set('items.search', e.target.value);

const ItemList = ({
    i18n,
    items,
}) => (
    <SearchPage>
        <h1>{i18n.get('items')}</h1>
        <form onSubmit={handleSearch}>
        <input placeholder={i18n.get('search')} onChange={handleSearchTyping} />
        <input type="submit" value={i18n.get('search')} />
        </form>
        {items.toJS().filter((m, i) => i < 100).map(item => <ListedItem key={item._id} {...item} />)}
    </SearchPage>
);

ItemList.propTypes = {
    i18n: IProps.map,
    items: IProps.list,
};

export default connect(state => ({
    i18n: state.getIn('i18n.strings'),
    items: state.getIn('services.items'),
}))(ItemList);
