import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TvShows from './TvShows';
import Movies from './Movies';
import MovieDetail from "../MoviePage/MovieDetail";
import TvDetail from "../TvShowPage/TvDetail";

class Discover extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/discover/movie" component={Movies} />
                <Route path="/discover/tv" component={TvShows} />
                <Route path="/tv/:tv" component={TvDetail} />
                <Route path="/movie/:movie" component={MovieDetail} />
                <Redirect to="/discover/movie" />
            </Switch>
        );
    }
}

export default Discover;