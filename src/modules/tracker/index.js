import TrackerIcon from 'react-icons/lib/md/access-alarms';

import TrackerDashboard from './TrackerDashboard.react';
import Tracker from './Tracker.react';

export default {
    name: 'tracker',
    path: 'tracker',
    icon: TrackerIcon,
    listingComponent: TrackerDashboard,
    detailedComponent: Tracker,
};
