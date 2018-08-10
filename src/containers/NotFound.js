import React from 'react';
import {observer} from 'mobx-react';

import SearchPage from './SearchPage';
import {l} from 'src/utils/i18n';

const NotFound = () => (
    <SearchPage>
        <h1>{l('notFound')}</h1>
    </SearchPage>
);

export default observer(NotFound);
