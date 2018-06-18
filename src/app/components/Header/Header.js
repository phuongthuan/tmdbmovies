import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.scss';

const Header = () => {
    return (
        <header className="ss_header">
            <Navbar />
            <SearchBar />
        </header>
    );
};

export default Header;