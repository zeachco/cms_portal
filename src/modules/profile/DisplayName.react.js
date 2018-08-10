import React from 'react';
import {observer} from 'mobx-react';
import state from 'src/store/state';
import {l} from 'src/utils/i18n';

const DisplayName = () => {
    const {info} = state.session;
    const displayName = info ? info.firstName || info.email : l('profile');
    return (
        <span>
            {displayName}
        </span>
    );
};

export default observer(DisplayName);
