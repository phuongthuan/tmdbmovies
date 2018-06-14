import React, { Component } from 'react';
import Item from '../Item';
import axios from 'axios';
import Pagination from '../../layouts/Pagination';

class MoviesList extends Component {
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
        this.setState({isLoading: true});

        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=137efd2d370db5e4c53251137cd907df&language=en-US&include_adult=false`)
            .then(response => {
                this.setState({ data: response.data, isLoading: false});
            });
    }

    render() {
        const movies = this.state.data.results;
        if (this.state.isLoading) { 
            return <p>Loading...</p>            
        }
        return (
            <div className="ss_results">
                {movies.map((movie) => (<Item movie={movie} key={movie.id} />) )}
                <Pagination dataPaginate={this.state.data} />
            </div>
        );
    }
}

export default MoviesList;