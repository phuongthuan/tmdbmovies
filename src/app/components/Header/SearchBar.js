import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SearchBar = () => {
    return (
        <div className="search_bar">
            <section className="search">
                <div className="sub_media container">
                    <form method="GET" action="" id="search_form">
                        <FontAwesomeIcon icon="search" />
                        <span className="autocomplete">
                            <input
                                autoCorrect="off"
                                autoComplete="off"
                                name="query"
                                type="text"
                                placeholder="Search for a movie, tv show, person..." />
                        </span>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SearchBar;