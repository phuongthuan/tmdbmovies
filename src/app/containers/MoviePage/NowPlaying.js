import React, { Component } from 'react';
import movieApi from '../api';
import MovieList from './MovieList';

class NowPlaying extends Component {
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
        movieApi.fetchMoviePaginate('movie', 'now_playing', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    prevPaginate(e) {
        const page = this.state.data.page - 1;
        movieApi.fetchMoviePaginate('movie', 'now_playing', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        movieApi.fetchMovie('movie', 'now_playing').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">Now Playing Movies</h2>
                <MovieList
                    routeProps={this.props}
                    prevPaginate={this.prevPaginate.bind(this)}
                    nextPaginate={this.nextPage.bind(this)}
                    moviesList={this.state.data} />
            </div>
        );
    }
}

export default NowPlaying;