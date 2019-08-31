import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Popular from '../MoviePage/Popular'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={props => <Popular {...props} />} />
            </React.Fragment>
        );
    }
}

export default Home;