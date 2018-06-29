import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import NowPlaying from './NowPlaying';
import Popular from './Popular';
import MovieDetail from "./MovieDetail";

class MoviePage extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/movie" component={Popular} />} />
                <Route path="/movie/top-rated" component={TopRated} />} />
                <Route path="/movie/upcoming" component={Upcoming} />} />
                <Route path="/movie/now-playing" component={NowPlaying} />} />
                <Route path="/movie/:movie" component={MovieDetail} />)}/>
            </Switch>
        );
    }
}

export default MoviePage;