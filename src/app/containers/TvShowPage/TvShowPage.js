import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopRated from './TopRated.js';
import OnTv from './OnTv.js';
import AiringToday from './AiringToday.js';
import Popular from './Popular.js';
import MovieDetail from '../MoviePage/MovieDetail.js';

class TvShowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
            options: {
                type: 'popular',
                page: 'tv_show'
            }
		}
	}
	render() {
        return (
       	    <div className="ss_media">
                <Switch>
                    {/* <Route exact path="/tv" render={() => (<MovieComponent type="popular" data={this.state.popular} updateMovieList={this.updateMovieList.bind(this)} />)} /> */}
                    <Route exact path="/tv" render={(props) => <Popular options={this.state.options} {...props} />} />
                    <Route path="/tv/top-rated" render={(props) => <TopRated {...props} />} />
                    <Route path="/tv/on-the-air" render={props => <OnTv {...props} />} />
                    <Route path="/tv/airing-today" render={props => <AiringToday {...props} />} />
                    <Route path="/tv/:tv" component={MovieDetail} />
                </Switch>
            </div>
        );
	}
}

export default TvShowPage;
