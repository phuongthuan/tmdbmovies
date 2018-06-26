import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TvShows from './TvShows';
import Movies from './Movies';
import MovieDetail from "../MoviePage/MovieDetail";
import TvDetail from "../TvShowPage/TvDetail";

class DiscoverPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    getDataItem = (data) => {
        this.setState({ data: data });
    };

    render() {
        return (
            <Switch>
                <Route exact path="/discover/movie" render={props => <Movies data={this.getDataItem} {...props} />} />
                <Route path="/discover/tv" render={props => <TvShows data={this.getDataItem} {...props} />} />
                <Route path="/movie/:movie" render={props => <MovieDetail data={this.state.data} {...props} />} />
                <Route path="/tv/:tv" render={props => <TvDetail data={this.state.data} {...props} />} />
                <Redirect to="/discover/movie" />
            </Switch>
        );
    }
}

export default DiscoverPage;