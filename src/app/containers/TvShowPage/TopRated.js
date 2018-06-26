import React, { Component } from 'react';
import requestApi from "../api";
import TvList from "./TvList";

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

    nextPage = (e) => {
        const page = this.state.data.page + 1;
        requestApi.fetchDataPaginate('tv', 'top_rated', page).then(response => {
            this.setState({data: response.data});
        });
    };

    prevPaginate = (e) => {
        const page = this.state.data.page - 1;
        requestApi.fetchDataPaginate('tv', 'top_rated', page).then(response => {
            this.setState({ data: response.data });
        });
    };

    getTvbyId = (id) => {
        requestApi.fetchDataById('tv', id).then(response => {
            this.props.data(response.data);
        });
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        requestApi.fetchData('tv', 'top_rated').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="ss_media">
                    <h2 className="title">Top Rated TV Shows</h2>
                    <TvList
                        tv={this.getTvbyId}
                        routeProps={this.props}
                        prevPaginate={this.prevPaginate}
                        nextPaginate={this.nextPage}
                        tvshowsList={this.state.data} />
                </div>
            </div>
        );
    }

}

export default TopRated;