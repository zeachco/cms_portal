import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import './ThreeColsLayout.css';
import Navigation from '../components/Navigation';
import SearchPage from './SearchPage';
import EditPage from './EditPage';
import UserList from './UserList';
import ItemList from './ItemList';
import NotFound from './NotFound';
import Login from '../components/Login';

const PageMap = {
    users: UserList,
    items: ItemList,
};

const App = ({
    isAuth,
    page,
    id,
    field,
    value,
}) => {
    let bodyJsx = (
        <SearchPage>
            <Login />
        </SearchPage>
    );
    let editorJsx = null;
    if (isAuth) {
        const Page = PageMap[page] || NotFound;
        bodyJsx = (
            <SearchPage>
                <Page />
            </SearchPage>
        );
        if (id) {
            editorJsx = (
                <EditPage>
                    Editing User {id}
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
