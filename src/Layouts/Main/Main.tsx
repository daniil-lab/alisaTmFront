import React from 'react';
import MainWrapper from '../../Wrappers/Main/MainWrapper';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';

import './Main.scss';

interface IMain {
    children?: React.ReactNode;
}

const Main: React.FunctionComponent<IMain> = (props: IMain) => {
    const { children } = props;
    return (
        <div className="main-layout">
            <Sidebar />

            <MainWrapper>
                <Navbar />
                {children}
                tett
            </MainWrapper>
        </div>
    );
};

export default Main;
