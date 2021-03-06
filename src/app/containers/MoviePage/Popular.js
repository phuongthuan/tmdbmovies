import React, { Component } from 'react';
import requestApi from '../api.js';
import MovieList from './MovieList';
import Spinner from '../../components/Spinner/index.js';

class Popular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                page: 1,
                results: []
            },
            isLoading: false
        };
    }

    nextPage = () => {
        const page = this.state.data.page + 1;
        requestApi.fetchDataPaginate('movie/popular', page).then(response => {
            this.setState({data: response.data});
        });
    };

    prevPaginate = () => {
        const page = this.state.data.page - 1;
        requestApi.fetchDataPaginate('movie/popular', page).then(response => {
            this.setState({ data: response.data });
        });
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        requestApi.fetchData('movie/popular').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="ss_media">
                    {this.state.isLoading ? <Spinner /> : (
                        <React.Fragment>
                            <h2 className="title">Popular Movies</h2>
                            <MovieList
                                routeProps={this.props}
                                prevPaginate={this.prevPaginate}
                                nextPaginate={this.nextPage}
                                moviesList={this.state.data} />
                        </React.Fragment>
                    )}
                </div>
            </div>
        );
    }
}

export default Popular;