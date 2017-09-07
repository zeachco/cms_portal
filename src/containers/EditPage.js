import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Close from '../components/CloseButton';


const TopRight = styled.div`
    float: right
`;

const EditPage = ({
    children,
    currentPage,
}) => (
    <section className="tclEdit tclPage">
        <TopRight>
            <Link to={'/' + currentPage}>
                <Close />
            </Link>
        </TopRight>
        {children}
    </section>
);

EditPage.propTypes = {
    currentPage: PropTypes.string,
};

export default connect(state => ({
    currentPage: state.getIn('router.params.list'),
}))(EditPage);
