import React from 'react';
import Movie from './Movie';
import Pagination from '../../components/Pagination/Pagination';

const MovieList = (props) => {
    const movies = props.moviesList.results || [];
    return (
        <div className="ss_results">
            {movies.map(movie => movie ? (<Movie
                                    movie={movie}
                                    key={movie.id} />) : null )}
            <Pagination 
                routeProps={props.routeProps} 
                prevPaginate={props.prevPaginate} 
                nextPaginate={props.nextPaginate} 
                dataPaginate={props.moviesList} />
        </div>
    );
};

export default MovieList;