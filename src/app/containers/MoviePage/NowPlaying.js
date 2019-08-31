import React, { Component } from 'react';
import requestApi from '../api';
import MovieList from './MovieList';
import Spinner from '../../components/Spinner';

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

    nextPage() {
        const page = this.state.data.page + 1;
        requestApi.fetchDataPaginate('movie/now_playing', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    prevPaginate() {
        const page = this.state.data.page - 1;
        requestApi.fetchDataPaginate('movie/now_playing', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        requestApi.fetchData('movie/now_playing').then(response => {
            this.setState({ data: response.data, isLoading: false });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="ss_media">
                    {this.state.isLoading  ? <Spinner /> : (
                        <React.Fragment>
                            <h2 className="title">Now Playing Movies</h2>
                            <MovieList
                                routeProps={this.props}
                                prevPaginate={this.prevPaginate.bind(this)}
                                nextPaginate={this.nextPage.bind(this)}
                                moviesList={this.state.data} />
                        </React.Fragment>    
                        )
                    }
                </div>
            </div>
        );
    }
}

export default NowPlaying;