import React from 'react';
import {connect} from 'react-redux';
import IProps from 'react-immutable-proptypes';

import SearchPage from './SearchPage';
import ListedItem from '../components/ListedItem';

import {searchItems} from '../store/actions/services';
import {set} from '../store/actions/forms';
import {l} from 'src/utils/i18n';

const handleSearch = e => {
    e.preventDefault();
    searchItems();
};

const handleSearchTyping = e => set('items.search', e.target.value);

const ItemList = ({
    items,
}) => (
    <SearchPage>
        <h1>{l('items')}</h1>
        <form onSubmit={handleSearch}>
            <input placeholder={l('search')} onChange={handleSearchTyping} />
            <input type="submit" value={l('search')} />
        </form>
        {items.toJS().filter((m, i) => i < 100).map(item => <ListedItem key={item._id} {...item} />)}
    </SearchPage>
);

ItemList.propTypes = {
    items: IProps.list,
};

export default connect(state => ({
    items: state.getIn('services.items'),
}))(ItemList);
