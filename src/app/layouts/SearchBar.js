import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div class="search_bar">
                <section class="search">
                    <div class="sub_media container">
                        <form method="GET" action="" id="search_form">
                            <i class="fas fa-search sm"></i>
                            <span class="autocomplete">
                                <input
                                    autocorrect="off"
                                    autofill="off"
                                    autocomplete="off"
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