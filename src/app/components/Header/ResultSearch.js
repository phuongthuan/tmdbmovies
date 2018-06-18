import React, { Component } from 'react';

class ResultSearch extends Component {
    render() {
        return (
            <div class="results_search">
                <div class="results_popup">
                    <div class="ss_list_scroller">
                        <ul class="ss_list_result">
                            <li class="item-search">
                                <div class="slim_search">
                                    <div class="container">
                                        <i class="fas fa-search sm"></i>
                                        <p>Dilwale Dulhania Le Jayenge</p>
                                    </div>
                                </div>
                            </li>
                            <li class="item-search">
                                <div class="slim_search">
                                    <div class="container">
                                        <i class="fas fa-search sm"></i>
                                        <p>The Shawshank Redemption</p>
                                    </div>
                                </div>
                            </li>
                            <li class="item-search">
                                <div class="slim_search">
                                    <div class="container">
                                        <i class="fas fa-search sm"></i>
                                        <p>Your Name.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="item-search">
                                <div class="slim_search">
                                    <div class="container">
                                        <i class="fas fa-search sm"></i>
                                        <p>The Godfather</p>
                                    </div>
                                </div>
                            </li>
                            <li class="item-search">
                                <div class="slim_search">
                                    <div class="container">
                                        <i class="fas fa-search sm"></i>
                                        <p>Avengers: Infinity War</p>
                                    </div>
                                </div>
                            </li>
                            <li class="item-search">
                                <div class="slim_search">
                                    <div class="container">
                                        <i class="fas fa-search sm"></i>
                                        <p>Spirited Away</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="ss_nodata">
                        <div class="slim_search">
                            <div class="container">
                                <h2>No Result</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultSearch;