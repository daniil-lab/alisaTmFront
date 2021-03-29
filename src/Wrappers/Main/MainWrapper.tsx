import React from 'react';

import './MainWrapper.scss';

interface IMainWrapper {
    children?: React.ReactNode;
}

const MainWrapper: React.FunctionComponent<IMainWrapper> = ({ children }) => {
    return <div className="main-wrapper">{children}</div>;
};

export default MainWrapper;
