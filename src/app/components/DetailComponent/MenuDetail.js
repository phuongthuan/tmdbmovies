import React from 'react';

const MenuDetail = () => {
    return (
        <div className="content_wrapper">
            <ul className="shortcut_bar">
                <li className="no_hover"><a className="no_click" href="">Discussions</a><span /></li>
                <li className="no_hover"><a className="no_click" href="">Reviews</a><span /></li>
                <li className="no_hover"><a className="no_click" href="">Videos</a><span /></li>
                <li className="no_hover"><a className="no_click" href="">Images</a><span /></li>
                <li className="no_hover"><a className="no_click" href="">Changes</a><span /></li>
                <li className="no_hover"><a className="no_click" href="">Report</a><span /></li>
                <li className="no_hover"><a className="no_click" href="">Share</a><span /></li>
            </ul>
        </div>
    );
};

export default MenuDetail;
