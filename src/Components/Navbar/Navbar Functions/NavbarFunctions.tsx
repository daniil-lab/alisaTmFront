import React from 'react';
import { FaChevronDown, FaBell, FaCog, FaUserCircle } from 'react-icons/fa';

import './NavbarFunctions.scss';

const NavbarFunctions: React.FunctionComponent = () => {
    return (
        <div className="navbar-functions-container">
            <div className="navbar-buttons">
                <div className="navbar-wallet-course-block">
                    <p className="navbar-wallet-course">
                        Курс валют <span className="navbar-wallet-course primary">1$ - 78,25P</span>
                    </p>
                </div>

                <div className="navbar-add-button-block">
                    <p className="navbar-add-button">Добавить</p>

                    <p className="navbar-add-button primary">+</p>
                </div>
            </div>

            <div className="navbar-actions">
                <div className="navbar-dropdown-block">
                    <p className="navbar-dropdown">Главный офис</p>
                    <FaChevronDown className="navbar-dropdown" />
                </div>

                <div className="navbar-actions-list">
                    <div className="navbar-notifications-block navbar-action">
                        <FaBell className="navbar-notifications" />
                    </div>

                    <div className="navbar-settings-block navbar-action">
                        <FaCog className="navbar-settings" />
                    </div>

                    <div className="navbar-user-block navbar-action">
                        <FaUserCircle className="navbar-user" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarFunctions;
