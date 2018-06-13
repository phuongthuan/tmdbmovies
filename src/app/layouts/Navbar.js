import React, { Component } from 'react';
import logo from '../../static/images/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg';

class Navbar extends Component {
    render() {
        return (
            <nav className="ss_navbar container">
                <ul className="ss_menu">
                    <li className="nav-item ss_logo">
                        <a className="nav-link" href="">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Discover</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">TV Shows</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">People</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;