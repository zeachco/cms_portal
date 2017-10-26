import AccountIcon from 'react-icons/lib/md/account-box';

// import ItemsList from './ItemList.react';
// import ItemEditor from './ItemEditor.react';
import DisplayName from './DisplayName.react';
import WIP from '../common/WIP.react';

export default {
    name: 'profile',
    path: 'profile',
    icon: AccountIcon,
    listingComponent: WIP,
    detailedComponent: WIP,
    labelComponent: DisplayName,
};
