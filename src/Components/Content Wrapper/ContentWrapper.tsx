import React from 'react';

import './ContentWrapper.scss';

interface IContentWrapper {
    children?: React.ReactNode;
}

const ContentWrapper: React.FunctionComponent<IContentWrapper> = ({ children }) => {
    return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
