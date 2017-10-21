import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import './ThreeColsLayout.css';
import Navigation from '../components/Navigation';
import SearchPage from './SearchPage';
import EditPage from './EditPage';
import ItemEditor from '../components/ItemEditor';
import UserEditor from '../components/UserEditor';
import UserList from './UserList';
import ItemList from './ItemList';
import NotFound from './NotFound';
import Login from '../components/Login';
import modules from '../modules/listing';

const PageMap = {
    dashboard: null,
    profile: null,
    spaces: null,
    users: UserList,
    items: ItemList,
    categories: null,
};

const EditorMap = {
    spaces: null,
    users: UserEditor,
    items: ItemEditor,
    categories: null,
};

const App = ({
    isAuth,
    page,
    id,
    field,
    value,
}) => {
    const module = modules[page] || {}
    let bodyJsx = (
        <SearchPage>
            <Login />
        </SearchPage>
    );
    let editorJsx = null;
    if (isAuth) {
        const Page = module.listingComponent || PageMap[page] || NotFound;
        bodyJsx = (
            <SearchPage>
                <Page />
            </SearchPage>
        );
        if (id) {
            const Editor = module.detailedComponent || EditorMap[page] || NotFound;
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
    isAuth: PropTypes.bool.isRequired,
    page: PropTypes.string,
    id: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.string,
};

const mapStateToProps = state => ({
    isAuth: state.getIn('session.isAuth'),
    page: state.getIn('router.params.page'),
    id: state.getIn('router.params.id'),
    field: state.getIn('router.params.field'),
    value: state.getIn('router.params.value'),
});

export default connect(mapStateToProps)(App);
