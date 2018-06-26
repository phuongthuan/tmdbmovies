import React, { Component } from 'react';
import requestApi from '../api';
import MovieList from "../MoviePage/MovieList";

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                page: 1,
                results: []
            },
            isLoading: false
        }
    }

    nextPage = (e) => {
        const page = this.state.data.page + 1;
        requestApi.fetchDataPaginate('discover', 'movie', page).then(response => {
            this.setState({data: response.data});
        });
    };

    prevPaginate = (e) => {
        const page = this.state.data.page - 1;
        requestApi.fetchDataPaginate('discover', 'movie', page).then(response => {
            this.setState({ data: response.data });
        });
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        requestApi.fetchData('discover', 'movie').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    getMoviebyId = (id) => {
        requestApi.fetchDataById('movie', id).then(response => {
            this.props.data(response.data);
        });
    };

    render() {
        return (
            <div className="container">
                <div className="ss_media">
                    <h2 className="title">Discover New Movies & TV Shows</h2>
                    <MovieList
                        movie={this.getMoviebyId}
                        routeProps={this.props}
                        prevPaginate={this.prevPaginate}
                        nextPaginate={this.nextPage}
                        moviesList={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Movies;