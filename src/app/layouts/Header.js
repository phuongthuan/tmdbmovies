import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="ss_navbar container">
                    <ul class="ss_menu nav d-flex">
                        <li class="nav-item ss_logo">
                            <a class="nav-link" href="#">
                            <img src="assets/images/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="Image Logo" />
                        </a>
                    </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Discover</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">TV Shows</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">People</a>
                        </li>
                    </ul>
                </nav>
            </div>  
        );
    }
}

export default Header;