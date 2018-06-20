import React from 'react';
import Home from '../../containers/HomePage/Home';
import Discover from '../../containers/DiscoverPage/DiscoverPage';
import People from '../../containers/PeoplePage/PeoplePage';
import TVShow from '../../containers/TvShowPage/TvShowPage';
import { Switch, Route } from 'react-router-dom'
import MoviePage from '../../containers/MoviePage/MoviePage';
import './Main.scss';

const Main = (props) => {
    console.log(props);
    return (
        <main className="ss_main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/discover" component={Discover} />
                <Route path="/movie" component={MoviePage} />
                <Route path="/tv" component={TVShow} />
                <Route path="/person" component={People} />
            </Switch>
        </main>
    );
};

export default Main;