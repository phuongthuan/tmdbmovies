import React, { Component } from 'react';
import Icon from '@fortawesome/react-fontawesome';

class SearchBar extends Component{
    render() {

        return (
            <div className="search_bar">
                <section className="search">
                    <div className="sub_media container">
                        <form method="GET" action="" id="search_form">
                            <Icon icon="search" />
                            <span className="autocomplete">

                            <input
                                className="search_input"
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
    }
}

export default SearchBar;