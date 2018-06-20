import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import NowPlaying from './NowPlaying';
import Popular from './Popular';
import MovieDetail from "./MovieDetail";

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    updateMovieList = () => {
        this.setState();
    };

    render() {
        return (
            <Switch>
                {/* <Route exact path="/movie" render={() => (<MovieComponent type="popular" data={this.state.popular} updateMovieList={this.updateMovieList.bind(this)} />)} /> */}
                <Route exact path="/movie" render={props => <Popular {...props} />} />
                <Route path="/movie/top-rated" render={props => <TopRated {...props} />} />
                <Route path="/movie/upcoming" render={props => <Upcoming {...props} />} />
                <Route path="/movie/now-playing" render={props => <NowPlaying {...props} />} />
                <Route path="/movie/:movie" component={MovieDetail} />
            </Switch>
        );
    }
}

export default MoviePage;