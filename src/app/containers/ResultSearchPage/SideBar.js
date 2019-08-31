import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    // console.log('Sidebar', props.data);
    return (
        <nav>
            <ul>
                <li><Link to="/search/movie">Movies <span>6599</span></Link></li>
                <li><Link to="/search/movie">TV Shows <span>1128</span></Link></li>
                <li><Link to="/search/movie">People <span>591</span></Link></li>
                <li><Link to="/search/movie">Keywords <span>138</span></Link></li>
                <li><Link to="/search/movie">Companies <span>55</span></Link></li>
                <li><Link to="/search/movie">Collections <span>20</span></Link></li>
                <li><Link to="/search/movie">Networks <span>0</span></Link></li>
            </ul>
            <p className="search_tip">Tip: You can use the 'y:' filter to narrow your results by year. Example: 'star wars y:1977'.</p>
        </nav>
    );
};

export default SideBar;
