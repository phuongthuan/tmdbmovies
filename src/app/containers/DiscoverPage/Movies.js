import React, { Component } from 'react';
import requestApi from '../api';
import MovieList from "../MoviePage/MovieList";
import FormFilter from "./FormFilter";

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                page: 1,
                results: []
            },
            genres: [],
            years: []
        };
    }

    componentDidMount() {
        this.fetchMoviesList();
        this.fetchGenresList();
    }

    getMoviebyId = (id) => {
        requestApi.fetchDataById('movie', id).then(response => {
            if (this.props.data) {
                this.props.data(response.data);
            }
            // localStorage.setItem("data", response.data);
        });
    };

    filterMovieByYear = (data) => {
        this.setState({data});
    };

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

    fetchGenresList() {
        requestApi.fetchGenres('movie').then(response => {
            this.setState({genres: response.data});
        });
    }

    fetchMoviesList() {
        requestApi.fetchData('discover', 'movie').then(response => {
            this.setState({ data: response.data});
        });
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="container">
                <div className="ss_media">
                    <h2 className="title">Discover New Movies & TV Shows</h2>
                    <FormFilter listMoviesByYear={this.filterMovieByYear} />
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