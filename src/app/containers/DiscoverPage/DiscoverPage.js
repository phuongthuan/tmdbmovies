import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TvShows from './TvShows';
import Movies from './Movies';

class Discover extends Component {
    render() {
        return (
            <div className="ss_media">
                <Switch>
                    <Route exact path="/discover/movie" component={Movies} />
                    <Route path="/discover/tv" component={TvShows} />
                    <Redirect to="/discover/movie" />
                </Switch>
            </div>
        );
    }
}

export default Discover;