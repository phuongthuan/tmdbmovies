import React, { Component } from 'react';
import Icon from '@fortawesome/react-fontawesome';

class ResultSearch extends Component {
    render() {
        return (
            <div className="results_search" style={this.props.status}>
                <div className="results_popup">
                    <div className="trending_search">
                        <div className="container">
                            <h2>Trending Searches</h2>
                        </div>
                    </div>

                    <div className="ss_list_scroller">
                        <ul className="ss_list_result">
                            <li className="item-search">
                                <div className="slim_search">
                                    <div className="container">
                                        <Icon icon="search" />
                                        <p>Dilwale Dulhania Le Jayenge</p>
                                    </div>
                                </div>
                            </li>
                            <li className="item-search">
                                <div className="slim_search">
                                    <div className="container">
                                        <Icon icon="search" />
                                        <p>The Shawshank Redemption</p>
                                    </div>
                                </div>
                            </li>
                            <li className="item-search">
                                <div className="slim_search">
                                    <div className="container">
                                        <Icon icon="search" />
                                        <p>Your Name.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="item-search">
                                <div className="slim_search">
                                    <div className="container">
                                        <Icon icon="search" />
                                        <p>The Godfather</p>
                                    </div>
                                </div>
                            </li>
                            <li className="item-search">
                                <div className="slim_search">
                                    <div className="container">
                                        <Icon icon="search" />
                                        <p>Avengers: Infinity War</p>
                                    </div>
                                </div>
                            </li>
                            <li className="item-search">
                                <div className="slim_search">
                                    <div className="container">
                                        <Icon icon="search" />
                                        <p>Spirited Away</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ss_nodata">
                        <div className="slim_search">
                            <div className="container">
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