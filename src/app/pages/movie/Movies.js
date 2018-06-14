import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TopRated from './TopRated';
import Uncoming from './Uncoming';
import NowPlaying from './NowPlaying';
import Popular from './Popular';


class Movies extends Component {
    render() {
        return (
            <div className="ss_media">
                <Switch>
                    <Route exact path="/movie" component={Popular} />
                    <Route path="/movie/top-rated" component={TopRated} />
                    <Route path="/movie/uncoming" component={Uncoming} />
                    <Route path="/movie/now-playing" component={NowPlaying} />
                    <Redirect to="/movie" />
                </Switch>
            </div>
        );
    }
}

export default Movies;