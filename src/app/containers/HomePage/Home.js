import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Popular from '../MoviePage/Popular'

class Home extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={props => <Popular {...props} />} />
            </div>
        );
    }
}

export default Home;