import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TvShow from './TvShow';

class Discover extends Component {
    render() {
        return (
            <div className="ss_media">
                <Switch>
                    <Route exact path="/discover" component={TvShow} />
                    <Route path="/discover/tv" component={TvShow} />
                    <Redirect to="/discover" />
                </Switch>
            </div>
        );
    }
}

export default Discover;