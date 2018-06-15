import React, { Component } from 'react';
import movieApi from './api';
import MovieList from './MovieList';

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

    nextPage(e) {
        const page = this.state.data.page + 1;
        movieApi.fetchMoviePaginate('upcoming', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    prevPaginate(e) {
        const page = this.state.data.page - 1;
        movieApi.fetchMoviePaginate('upcoming', page).then(response => {
            this.setState({ data: response.data });
        });
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
                <MovieList
                    routeProps={this.props}
                    prevPaginate={this.prevPaginate.bind(this)}
                    nextPaginate={this.nextPage.bind(this)}
                    moviesList={this.state.data} />
            </div>
        );
    }
}

export default Upcoming;