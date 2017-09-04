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
            <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nisi, molestias at, nostrum ab laboriosam error asperiores nobis ex placeat cumque quas consequuntur quasi laborum repellendus et? Repellat, voluptatem nemo?
                </div>
                <ul>
                    {items.map((l, i) => (<li key={i}>{i} - {l}<hr /></li>))}
                    {items.map((l, i) => (<li key={i}>{i} - {l}<hr /></li>))}
                    {items.map((l, i) => (<li key={i}>{i} - {l}<hr /></li>))}
                    {items.map((l, i) => (<li key={i}>{i} - {l}<hr /></li>))}
                </ul>
            </div>
        );
    }
    return (
        <div className="tclList tclPage" onClick={openPanel}>
            {contentJsx}
        </div>
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
