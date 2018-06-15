import React from 'react';
import SubMenu from './SubMenu';
import logo from '../../images/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const submenu = {
        discover: [
            { routeName: '', name: 'Movies', mainMenu: 'discover' },
            { routeName: 'tv', name: 'TV Shows', mainMenu: 'discover' }
        ],
        movies: [
            { routeName: '', name: 'Popular', mainMenu: 'movie' },
            { routeName: 'top-rated', name: 'Top Rated', mainMenu: 'movie' },
            { routeName: 'upcoming', name: 'Upcoming', mainMenu: 'movie' },
            { routeName: 'now-playing', name: 'Now Playing', mainMenu: 'movie' }
        ],
        tvshows: [
            { routeName: '', name: 'Popular', mainMenu: 'tv' },
            { routeName: 'top-rated', name: 'Top Rated', mainMenu: 'tv' },
            { routeName: 'on-the-air', name: 'On TV', mainMenu: 'tv' },
            { routeName: 'airing-today', name: 'Airing Today', mainMenu: 'tv' }
        ],
        people: [
            { routeName: '', name: 'Popular People', mainMenu: 'person' }
        ]
    }
    const { discover, movies, tvshows, people } = submenu;
    return (
        <nav className="ss_navbar container">
            <ul className="ss_menu">
                <li className="ss_logo">
                    <NavLink to="/"><img src={logo} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/discover" activeClassName="nav-active">Discover
                        </NavLink>
                    <SubMenu menus={discover} />
                </li>
                <li>
                    <NavLink to="/movie" activeClassName="nav-active">Movies
                        </NavLink>
                    <SubMenu menus={movies} />
                </li>
                <li>
                    <NavLink to="/tv" activeClassName="nav-active">TV Shows
                        </NavLink>
                    <SubMenu menus={tvshows} />
                </li>
                <li>
                    <NavLink to="/person" activeClassName="nav-active">People
                        </NavLink>
                    <SubMenu menus={people} />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;