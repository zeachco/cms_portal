import React from 'react';

import './ListedElement.css';

const SearchPage = ({
    children,
}) => (
    <section className="tclList tclPage">
        {children}
    </section>
);

export default SearchPage;
