import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

class MovieListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                results: []
            },
            isLoading: false
        }
    }
    
    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=137efd2d370db5e4c53251137cd907df&language=en-US&include_adult=false`)
            .then(response => {
                this.setState({ data: response.data, isLoading: false });
            });
    }
    render() {
        return (<MovieList data={this.state.data} />);
    }
}

export default MovieListContainer;