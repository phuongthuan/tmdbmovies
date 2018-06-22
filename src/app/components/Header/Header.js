import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.scss';
import ResultSearch from "./ResultSearch";


const Header = () => {
    return (
        <header className="ss_header">
            <Navbar />
            <SearchBar />
            <ResultSearch />
        </header>
    );
};

export default Header;