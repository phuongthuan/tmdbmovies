import React, { Component } from 'react';
import MoviesList from '../components/movie/MoviesList';

class Movies extends Component {
    render() {
        return (
            <div className="ss_media">
                <h2 className="title">Top Rated Movies</h2>
                <MoviesList />
            </div>
        );
    }
}

export default Movies;