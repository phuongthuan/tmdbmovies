import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopRated from './TopRated.js';
import OnTv from './OnTv.js';
import AiringToday from './AiringToday.js';
import Popular from './Popular.js';
import TvDetail from "./TvDetail";

class TvShowPage extends Component {

	render() {
        return (
            <Switch>
                <Route exact path="/tv" component={Popular} />} />
                <Route path="/tv/top-rated" component={TopRated} />} />
                <Route path="/tv/on-the-air" component={OnTv} />} />
                <Route path="/tv/airing-today" component={AiringToday} />} />
                <Route path="/tv/:tv" component={TvDetail} />)} />
            </Switch>
        );
	}
}

export default TvShowPage;
