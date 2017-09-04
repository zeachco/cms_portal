import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {openPanel} from '../store/actions/panels';
import Login from '../components/Login';

const SearchPage = ({
    showLogin,
    items,
}) => {
    let contentJsx = null;
    if (showLogin) {
        contentJsx = <Login />;
    } else {
        contentJsx = (
            <ul>
                {items.map((l, i) => (<li key={i}>{i} - {l}<hr /></li>))}
            </ul>
        );
    }
    return (
        <section className="tclList tclPage" onClick={openPanel}>
            {contentJsx}
        </section>
    );
};

SearchPage.propTypes = {
    showLogin: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    showLogin: !state.getIn('session.isAuth'),
    items: window.location.href.split(''), // cheating here to have a big list
});

export default connect(mapStateToProps)(SearchPage);
