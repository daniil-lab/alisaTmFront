import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './NavbarSearch.scss';

const NavbarSearch: React.FunctionComponent = () => {
    const [showLabel, setShowLabel] = useState(true);
    const [searchText, setSearchText] = useState('');

    const hideLabel = () => setShowLabel(false);
    const displayLabel = () => setShowLabel(true);
    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => setSearchText(e.currentTarget.value);

    return (
        <div className="navbar-search-container">
            {showLabel && searchText.length === 0 && (
                <div className="navbar-search-label-block">
                    <FaSearch className="navbar-search-label icon" />

                    <p className="navbar-search-label">Поиск по ключевым словам</p>
                </div>
            )}
            <input
                onChange={(e: React.FormEvent<HTMLInputElement>) => handleSearch(e)}
                onFocus={() => hideLabel()}
                onBlur={() => displayLabel()}
                className="navbar-search"
                type="text"
            />
        </div>
    );
};

export default NavbarSearch;
