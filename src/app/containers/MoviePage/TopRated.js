import React, { Component } from 'react';
import MovieListContainer from './MovieListContainer';
import movieApi from './api';

class TopRated extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: {
                results: []
            },
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        movieApi.fetchMovie('top_rated').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">Top Rated Movies</h2>
                <MovieListContainer movies={this.state.data} />
            </div>
        );
    }
}

export default TopRated;