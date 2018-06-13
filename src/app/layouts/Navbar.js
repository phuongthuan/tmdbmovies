import React, { Component } from 'react';
import logo from '../../static/images/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg';
import { NavLink } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <nav className="ss_navbar container">
                <ul className="ss_menu">
                    <li className="ss_logo">
                        <NavLink to="/"><img src={logo} alt="" /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover" activeClassName="nav-active">Discover</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" activeClassName="nav-active">Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tvshows" activeClassName="nav-active">TV Shows</NavLink>
                    </li>
                    <li>
                        <NavLink to="/people" activeClassName="nav-active">People</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;