import React, { Component } from 'react';
import movieApi from './api';
import MovieListContainer from './MovieListContainer';

class MovieComponent extends Component {

    componentDidMount() {
        movieApi.fetchMovie(this.props.type).then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">Popular Movies</h2>
                <MovieListContainer movies={this.props.data} />
            </div>
        );
    }
}

export default MovieComponent;