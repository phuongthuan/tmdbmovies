import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import NowPlaying from './NowPlaying';
import Popular from './Popular';
import MovieDetail from './MovieDetail';

class MoviePage extends PureComponent {
    render() {
        return (
            <div className="ss_media">
                <Route exact path="/movie" component={Popular} />
                <Route path="/movie/top-rated" component={TopRated} />
                <Route path="/movie/upcoming" component={Upcoming} />
                <Route path="/movie/now-playing" component={NowPlaying} />
                <Route path="/movie/:movie" component={MovieDetail} />
            </div>
        );
    }
}

export default MoviePage;