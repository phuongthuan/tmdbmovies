import React, { Component } from 'react';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Discover from '../pages/Discover';
import People from '../pages/People';
import TVShow from '../pages/Tv';
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <main className="ss_main">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/discover" component={Discover} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/tvshows" component={TVShow} />
                        <Route path="/people" component={People} />
                    </Switch>
                </div>
            </main>
        );
    }
}

export default Main;