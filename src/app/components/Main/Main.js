import React, { Component } from 'react';
import Home from '../../containers/HomePage/Home';
import Discover from '../../containers/DiscoverPage/Discover';
import People from '../../containers/PeoplePage/People';
import TVShow from '../../containers/TvShowPage/Tv';
import { Switch, Route } from 'react-router-dom'
import MoviePage from '../../containers/MoviePage/MoviePage';

class Main extends Component {
    render() {
        return (
            <main className="ss_main">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/discover" component={Discover} />
                        <Route path="/movie" component={MoviePage} />
                        <Route path="/tv" component={TVShow} />
                        <Route path="/person" component={People} />
                    </Switch>
                </div>
            </main>
        );
    }
}

export default Main;