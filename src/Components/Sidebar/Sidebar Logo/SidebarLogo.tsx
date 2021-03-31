import React from 'react';
import BrandLogo from '../../../assets/images/logo.svg';

import './SidebarLogo.scss';

const SidebarLogo: React.FunctionComponent = () => {
    return (
        <div className="sidebar-logo-block">
            {/* <BrandLogo className="sidebar-logo" /> */}
            <BrandLogo />
            {/* <img className="sidebar-logo" src={BrandLogo} /> */}
        </div>
    );
};

export default SidebarLogo;
