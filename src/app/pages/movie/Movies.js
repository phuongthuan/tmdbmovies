import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopRated from './TopRated';
import Uncoming from './Uncoming';
import NowPlaying from './NowPlaying';
import Popular from './Popular';
import MovieDetail from './MovieDetail';

class Movies extends Component {
    render() {
        return (
            <div className="ss_media">
                <Route exact path="/movie" component={Popular} />
                <Route path="/movie/top-rated" component={TopRated} />
                <Route path="/movie/uncoming" component={Uncoming} />
                <Route path="/movie/now-playing" component={NowPlaying} />
                <Route path="/movie/:movie" component={MovieDetail} />
            </div>
        );
    }
}

export default Movies;