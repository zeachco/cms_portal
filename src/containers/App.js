import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {observer} from 'mobx-react';
import cx from 'classnames';

import './ThreeColsLayout.css';
import Navigation from '../components/Navigation.react';
import SearchPage from './SearchPage';
import EditPage from './EditPage';
import NotFound from './NotFound';
import Login from '../components/Login';
import modules from '../modules/listing';
import state from 'src/store/state';

const App = ({
    page,
    id,
    field,
    value,
}) => {
    const {isAuth} = state.session;
    const module = modules[page] || {};
    let bodyJsx = (
        <SearchPage>
            <Login />
        </SearchPage>
    );
    let editorJsx = null;
    if (isAuth) {
        const Page = module.listingComponent || NotFound;
        bodyJsx = (
            <SearchPage>
                <Page />
            </SearchPage>
        );
        if (id) {
            const Editor = module.detailedComponent || NotFound;
            editorJsx = (
                <EditPage>
                    <Editor />
                </EditPage>
            );
        }
        if (value) {
            bodyJsx = (
                <SearchPage>
                    <h1>Searching for {value} in {field}</h1>
                    <Page />
                </SearchPage>
            );
        }
    }
    return (
        <div className={cx('tclMain', {detailed: id && isAuth})}>
            <Navigation />
            {bodyJsx}
            {editorJsx}
        </div>
    );
};

App.propTypes = {
    page: PropTypes.string,
    id: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.string,
};

const mapStateToProps = s => ({
    page: s.getIn('router.params.page'),
    id: s.getIn('router.params.id'),
    field: s.getIn('router.params.field'),
    value: s.getIn('router.params.value'),
});

export default connect(mapStateToProps)(observer(App));
