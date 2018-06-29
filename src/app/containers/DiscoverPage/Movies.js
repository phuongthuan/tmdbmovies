import React, { Component } from 'react';
import requestApi from '../api';
import MovieList from "../MoviePage/MovieList";
import FormFilter from "./FormFilter";
import queryString from 'query-string';
import { withRouter } from "react-router-dom";

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                page: 1,
                results: []
            },
            selectedYear: '2018',
            sortedBy: 'popularity.desc',
            genres: [],
            years: []
        };
    }

    componentDidMount() {
        this.fetchMoviesList();
        this.fetchGenresList();
        this.fetchMoviesListByGivingUrlParams();
    }

    filterMovieByYear = (data) => {
        this.setState({data});
    };

    getSelectedYear = (selectedYear) => {
        this.setState({selectedYear});
    };

    getSortedBy = (sortedBy) => {
        this.setState({sortedBy});
    };

    nextPaginate = () => {
        const page = this.state.data.page + 1;
        const year = this.state.selectedYear;
        const sorted_by = this.state.sortedBy;
        const type = 'movie';
        requestApi.fetchDataDiscoverPagePaginate('discover/movie', page, year, sorted_by, type).then(response => {
            this.setState({data: response.data});
            this.props.history.push(`?page=${page}&language=en&primary_release_year=${year}&sort_by=${sorted_by}&vote_count.gte=0&media_type=${type}`);
        });
    };

    prevPaginate = () => {
        const page = this.state.data.page - 1;
        const year = this.state.selectedYear;
        const sorted_by = this.state.sortedBy;
        const type = 'movie';
        requestApi.fetchDataDiscoverPagePaginate('discover/movie', page, year, sorted_by, type).then(response => {
            this.setState({data: response.data});
            this.props.history.push(`?page=${page}&language=en&primary_release_year=${year}&sort_by=${sorted_by}&vote_count.gte=0&media_type=${type}`);
        });
    };

    fetchGenresList = () => {
        requestApi.fetchGenres('movie').then(response => {
            this.setState({genres: response.data});
        });
    };

    fetchMoviesList = () => {
        requestApi.fetchData('discover/movie').then(response => {
            this.setState({ data: response.data});
        });
    };

    fetchMoviesListByGivingUrlParams = () => {
        const param = queryString.parse(location.search);
        const args = [param.page, param.primary_release_year, param.sort_by, param.media_type];
        requestApi.fetchData('discover/movie', ...args).then(response => {
            this.setState({ data: response.data});
        });
    };

    render() {

        return (
            <div className="container">
                <div className="ss_media">
                    <h2 className="title">Discover New Movies & TV Shows</h2>

                    <FormFilter
                        sortedBy={this.getSortedBy}
                        selectedYear={this.getSelectedYear}
                        sortedType={this.getSortedBy}
                        listMoviesByYear={this.filterMovieByYear} />

                    <MovieList
                        routeProps={this.props}
                        prevPaginate={this.prevPaginate}
                        nextPaginate={this.nextPaginate}
                        moviesList={this.state.data} />
                </div>
            </div>
        );
    }
}

export default withRouter(Movies);