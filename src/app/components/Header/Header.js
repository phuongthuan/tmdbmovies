import React, { Component } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

class Header extends Component {
    render() {
        return (
            <header className="ss_header fixed-top">
                <Navbar />
                <SearchBar />
            </header>
        );
    }
}

export default Header;