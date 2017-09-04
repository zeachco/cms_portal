import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import Close from '../components/CloseButton';
import {closePanel} from '../store/actions/panels';

const SearchPage = () => (
    <div className="tclEditor tclPage">
        <div style={{
            float: 'right',
        }}
        >
            <Close onClick={closePanel} />
        </div>
        <h2>Editor</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, consectetur iste? Error officiis ducimus doloribus ipsa accusamus vitae eius quisquam dolores tenetur quam, aliquam tempora quo esse corporis! Exercitationem, quibusdam!</div>
        <h2>Product A</h2>
        <div className="field">
            <label>Price</label> <span>$ 10.15</span>
        </div>
        <div className="field">
            <label>Name </label> <input defaultValue="Product A" />
        </div>
        <div className="field">
            <label>Rating </label> <input type="range" />
        </div>
    </div>
);

SearchPage.propTypes = {
    // items: PropTypes.array.isRequired,
};

const mapStateToProps = (/*state*/) => ({
    // items: window.location.href.split(''), // cheating here to have a big list
});

export default connect(mapStateToProps)(SearchPage);
