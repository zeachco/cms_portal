import ItemsIcon from 'react-icons/lib/go/package';

import ItemsList from './ItemList.react';
// import ItemEditor from './ItemEditor.react';
import WIP from '../common/WIP.react';

export default {
    name: 'items',
    path: 'items',
    icon: ItemsIcon,
    listingComponent: ItemsList,
    detailedComponent: WIP,
};
