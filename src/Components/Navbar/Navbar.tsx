import React from 'react';

import './Navbar.scss';

const Navbar: React.FunctionComponent = () => {
    return (
        <div className="navbar">
            <div className="navbar-search-block">
                <input className="navbar-search" type="text" />
            </div>

            <div className="navbar-buttons">
                test
            </div>

            <div className="navbar-actions">
                test
            </div>
        </div>
    );
};

export default Navbar;
