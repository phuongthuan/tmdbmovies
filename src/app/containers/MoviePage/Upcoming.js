import React, { Component } from 'react';
import MovieListContainer from './MovieListContainer';
import movieApi from './api';

class Upcoming extends Component {
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
        movieApi.fetchMovie('upcoming').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">Upcoming Movies</h2>
                <MovieListContainer movies={this.state.data} />
            </div>
        );
    }
}

export default Upcoming;