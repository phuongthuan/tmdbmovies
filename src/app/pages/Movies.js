import React, { Component } from 'react';
import Item from '../components/Item';
import Pagination from '../layouts/Pagination';

class Movies extends Component {
    render() {
        return (
            <div className="ss_media">
                <h2 className="title">Top Rated Movies</h2>
                
                <div className="ss_results">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />

                    <Pagination />
                </div>
            </div>
        );
    }
}

export default Movies;