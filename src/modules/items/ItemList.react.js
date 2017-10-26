import React from 'react';
import IProps from 'react-immutable-proptypes';
import {connect} from 'react-redux';

import {searchItems} from '../../store/actions/services';
import Field from '../common/Field.react';

const handleTriggerSearch = e => {
    e.preventDefault();
    searchItems();
};

const TrackerDashboard = ({
    l,
    spaces,
}) => (
    <div>
        <h1>{l.get('items')}</h1>
        <form onSubmit={handleTriggerSearch}>
            <Field
                label={l.get('search')}
                path="items.search.text"
                component="input"
                autoFocus
            />
            <br />
            <Field
                label={l.get('code')}
                path="items.search.code"
                component="input"
            />
            <br />
            <Field
                label={l.get('space')}
                path="items.search.space"
                component={'select'}
            >
                {spaces.map(s => <option key={s} value={s}>{s}</option> )}
            </Field>
            <br />
            <input type="submit" value={l.get('search')} />
        </form>
    </div>
);

TrackerDashboard.propTypes = {
    l: IProps.map.isRequired,
    spaces: IProps.list,
};

const mapStateToProps = state => ({
    l: state.getIn('i18n.strings'),
    spaces: state.getIn('session.info.spaces'),
});

export default connect(mapStateToProps)(TrackerDashboard);
