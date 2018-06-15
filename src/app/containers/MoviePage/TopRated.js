import React, { Component } from 'react';
import MovieListContainer from './MovieListContainer';

class TopRated extends Component {
    render() {
        return (
            <div>
                <h2 className="title">Top Rated Movies</h2>
                <MovieListContainer />
            </div>
        );
    }
}

export default TopRated;