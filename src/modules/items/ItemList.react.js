import React from 'react';
import {observer} from 'mobx-react';

import {searchItems} from '../../store/actions/services';
import Field from '../common/Field.react';
import {l} from 'src/utils/i18n';
import state from 'src/store/state';

const handleTriggerSearch = e => {
    e.preventDefault();
    searchItems();
};

const TrackerDashboard = () => (
    <div>
        <h1>{l('items')}</h1>
        <form onSubmit={handleTriggerSearch}>
            <Field
                label={l('search')}
                path="items.search.text"
                component="input"
                autoFocus
            />
            <br />
            <Field
                label={l('code')}
                path="items.search.code"
                component="input"
            />
            <br />
            <Field
                label={l('space')}
                path="items.search.space"
                component={'select'}
            >
                {state.session.info.spaces.map(s => <option key={s} value={s}>{s}</option> )}
            </Field>
            <br />
            <input type="submit" value={l('search')} />
        </form>
    </div>
);

export default observer(TrackerDashboard);
