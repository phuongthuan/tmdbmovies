import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Popular from './Popular';
import TopRated from './TopRated';
import AiringToday from './AiringToday';
import OnTv from './OnTv';

class Tv extends Component {
    render() {
        return (
            <div className="ss_media">
                <Switch>
                    <Route exact path="/tv" component={Popular} />
                    <Route path="/tv/top-rated" component={TopRated} />
                    <Route path="/tv/on-the-air" component={OnTv} />
                    <Route path="/tv/airing-today" component={AiringToday} />
                    <Redirect to="/tv" />
                </Switch>
            </div>
        );
    }
}

export default Tv;