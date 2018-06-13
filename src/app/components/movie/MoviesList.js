import React, { Component } from 'react';
import Item from '../Item';
import axios from 'axios';
import Pagination from '../../layouts/Pagination';

class MoviesList extends Component {
    state = {
        data: {
            results: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=137efd2d370db5e4c53251137cd907df&language=en-US&include_adult=false`)
            .then(response => {
                const data = response.data;
                this.setState({data});
                console.log(data);
            });
    }
    render() {
        const movies = this.state.data.results;
        return (
            <div className="ss_results">
                {movies.map(movie => (<Item movie={movie} key={movie.id} />) )}
                <Pagination dataPaginate={this.state.data} />
            </div>
        );
    }
}

export default MoviesList;