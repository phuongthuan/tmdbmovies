import React, { Component } from 'react';
import requestApi from '../api.js';
import TvList from "./TvList";

class Popular extends Component {

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

    nextPage = () => {
        const page = this.state.data.page + 1;
        requestApi.fetchDataPaginate('tv/popular', page).then(response => {
            this.setState({data: response.data});
        });
    };

    prevPaginate = () => {
        const page = this.state.data.page - 1;
        requestApi.fetchDataPaginate('tv/popular', page).then(response => {
            this.setState({ data: response.data });
        });
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        requestApi.fetchData('tv/popular').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="ss_media">
                    <h2 className="title">Popular TV Shows</h2>
                    <TvList
                        routeProps={this.props}
                        prevPaginate={this.prevPaginate.bind(this)}
                        nextPaginate={this.nextPage.bind(this)}
                        tvshowsList={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Popular;