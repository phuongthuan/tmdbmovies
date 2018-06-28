import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import TvShows from './TvShows';
import Movies from './Movies';
import MovieDetail from "../MoviePage/MovieDetail";
import TvDetail from "../TvShowPage/TvDetail";

class DiscoverPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    getDataItem = (data) => {
        this.setState({data});
    };

    // componentDidMount() {
    //     this.setState({data: localStorage.getItem("data")});
    // }

    // componentWillUnmount() {
    //     localStorage.removeItem("data");
    // }

    render() {
        return (
            <Switch>
                {/*<Route exact path="/discover/movie" component={Movies} data={this.getDataItem} />*/}
                <Route exact path="/discover/movie" render={props => <Movies data={this.getDataItem} {...props} />}/>

                <Route path="/discover/tv" component={TvShows}/>
                <Route path="/movie/:movie" component={MovieDetail} data={this.state.data}/>
                {/*<Route path="/movie/:movie" render={props => <MovieDetail movie={this.state.data} {...props} />} />*/}
                <Route path="/tv/:tv" component={TvDetail} data={this.state.data}/>
                <Redirect to="/discover/movie"/>
            </Switch>
        );
    }
}

export default DiscoverPage;