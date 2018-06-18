import React from 'react';
import { Link } from 'react-router-dom';
 
const SubMenu = (props) => {
    const menus = props.menus;
    return (
        <ul className="ss_sub_menu tv">
            {menus.map((menuitem, i) => (<li key={i}><Link to={`/${menuitem.mainMenu}${menuitem.routeName}`}>{menuitem.name}</Link></li>))}
        </ul>
    );
};

export default SubMenu;