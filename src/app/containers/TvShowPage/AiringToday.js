import React, { Component } from 'react';
import requestApi from "../api";
import MovieList from "../MoviePage/MovieList";

class TopRated extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                page: 1,
                type: 'tv',
                results: []
            },
            isLoading: false
        }
    }

    nextPage(e) {
        const page = this.state.data.page + 1;
        requestApi.fetchDataPaginate('tv', 'airing_today', page).then(response => {
            this.setState({data: response.data});
        });
    }

    prevPaginate(e) {
        const page = this.state.data.page - 1;
        requestApi.fetchDataPaginate('tv', 'airing_today', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        requestApi.fetchData('tv', 'airing_today').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="ss_media">
                    <h2 className="title">TV Shows Airing Today</h2>
                    <MovieList
                        routeProps={this.props}
                        prevPaginate={this.prevPaginate.bind(this)}
                        nextPaginate={this.nextPage.bind(this)}
                        moviesList={this.state.data} />
                </div>
            </div>
        );
    }
}

export default TopRated;