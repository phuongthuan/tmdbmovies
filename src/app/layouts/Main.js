import React, { Component } from 'react';
import Home from '../pages/Home';
import Movies from '../pages/movie/Movies';
import Discover from '../pages/discover/Discover';
import People from '../pages/people/People';
import TVShow from '../pages/tvshow/Tv';
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <main className="ss_main">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/discover" component={Discover} />
                        <Route path="/movie" component={Movies} />
                        <Route path="/tv" component={TVShow} />
                        <Route path="/person" component={People} />
                    </Switch>
                </div>
            </main>
        );
    }
}

export default Main;