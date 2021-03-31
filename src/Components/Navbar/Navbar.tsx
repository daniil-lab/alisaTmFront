import React from 'react';
import NavbarFunctions from './Navbar Functions/NavbarFunctions';
import NavbarSearch from './Navbar Search/NavbarSearch';

import './Navbar.scss';

const Navbar: React.FunctionComponent = () => {
    return (
        <div className="navbar">
            <NavbarSearch />
            <NavbarFunctions />
        </div>
    );
};

export default Navbar;
