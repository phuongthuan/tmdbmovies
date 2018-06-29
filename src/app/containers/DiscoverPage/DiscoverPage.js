import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import TvShows from './TvShows';
import Movies from './Movies';

class DiscoverPage extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/discover/movie" component={Movies} />
                <Route path="/discover/tv" component={TvShows}/>
                <Redirect to="/discover/movie"/>
            </Switch>
        );
    }
}

export default DiscoverPage;