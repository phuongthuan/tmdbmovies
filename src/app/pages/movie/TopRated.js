import React, { Component } from 'react';
import MoviesList from '../../components/movie/MoviesList';


class TopRated extends Component {
    render() {
        return (
            <div>
                <h2 className="title">Top Rated Movies</h2>
                <MoviesList />
            </div>
        );
    }
}

export default TopRated;