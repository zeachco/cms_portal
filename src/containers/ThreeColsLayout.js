import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cx from 'classnames';

import './ThreeColsLayout.css';
import Navigation from '../components/Navigation';
import SearchPage from './SearchPage';
import EditPage from './EditPage';
import UserList from './UserList';
import NotFound from './NotFound';
import Login from '../components/Login';

const PageMap = {
    users: UserList,
};

const ThreeColsLayout = ({
    isAuth,
    list,
    itemId,
}) => {
    let bodyJsx = (
        <SearchPage>
            <Login />
        </SearchPage>
    );
    let editorJsx = null;
    if (isAuth) {
        const Page = PageMap[list] || NotFound;
        bodyJsx = (
            <SearchPage>
                <Page />
            </SearchPage>
        );
        if (itemId) {
            editorJsx = (
                <EditPage>
                    {itemId}
                </EditPage>
            );
        }
    }
    return (
        <div className={cx('tclMain', {detailed: itemId && isAuth})}>
            <Navigation />
            {bodyJsx}
            {editorJsx}
        </div>
    );
};

ThreeColsLayout.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    list: PropTypes.string,
    itemId: PropTypes.string,
};

const mapStateToProps = state => ({
    isAuth: state.getIn('session.isAuth'),
    list: state.getIn('router.params.list'),
    itemId: state.getIn('router.params.id'),
});

export default connect(mapStateToProps)(ThreeColsLayout);
