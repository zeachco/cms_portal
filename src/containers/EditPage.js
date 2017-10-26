import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Close from '../components/CloseButton.react';

const TopRight = styled.div`
    float: right
`;

const EditPage = ({
    children,
    page,
}) => (
    <section className="tclEdit tclPage">
        <TopRight>
            <Link to={'/' + page}>
                <Close />
            </Link>
        </TopRight>
        {children}
    </section>
);

EditPage.propTypes = {
    page: PropTypes.string,
};

export default connect(state => ({
    page: state.getIn('router.params.page'),
}))(EditPage);
