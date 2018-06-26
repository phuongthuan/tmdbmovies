import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopRated from './TopRated.js';
import OnTv from './OnTv.js';
import AiringToday from './AiringToday.js';
import Popular from './Popular.js';
import TvDetail from "./TvDetail";

class TvShowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
            tv: {}
		}
	}

    getTv = (data) => {
        this.setState({ tv: data });
    };

	render() {
        return (
            <Switch>
                {/* <Route exact path="/tv" render={() => (<MovieComponent type="popular" data={this.state.popular} updateMovieList={this.updateMovieList.bind(this)} />)} /> */}
                <Route exact path="/tv" render={(props) => <Popular data={this.getTv} {...props} />} />
                <Route path="/tv/top-rated" render={(props) => <TopRated data={this.getTv} {...props} />} />
                <Route path="/tv/on-the-air" render={props => <OnTv data={this.getTv} {...props} />} />
                <Route path="/tv/airing-today" render={props => <AiringToday data={this.getTv} {...props} />} />
                <Route path="/tv/:tv" render={props => (<TvDetail data={this.state.tv} {...props} />)} />
            </Switch>
        );
	}
}

export default TvShowPage;
