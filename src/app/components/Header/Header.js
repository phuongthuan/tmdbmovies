import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <header className="ss_header">
            <Navbar />
            <SearchBar />
        </header>
    );
}

export default Header;