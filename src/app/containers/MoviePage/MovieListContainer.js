import React from 'react';
import MovieList from './MovieList';

const MovieListContainer = (props) => {
    return (<MovieList data={props.movies} />);
}

export default MovieListContainer;