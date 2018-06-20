import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PopularPeople from './PopularPeople';

class People extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/person" component={PopularPeople} />
                <Redirect to="/person" />
            </Switch>
        );
    }
}

export default People;