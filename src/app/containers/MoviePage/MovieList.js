import React from 'react';
import Item from './Item';
import Pagination from '../../components/Pagination/Pagination';

const MovieList = (props) => {
    const movies = props.data.results;
    return (
        <div className="ss_results">
            {movies.map(movie => (<Item movie={movie} key={movie.id} />) )}
            <Pagination dataPaginate={props.data} />
        </div>
    );
}

export default MovieList;