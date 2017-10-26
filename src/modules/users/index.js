import PeopleIcon from 'react-icons/lib/md/people-outline';

import UsersList from './UsersList.react';
import UserEditor from './UserEditor.react';

export default {
    name: 'users',
    path: 'users',
    icon: PeopleIcon,
    listingComponent: UsersList,
    detailedComponent: UserEditor,
};
