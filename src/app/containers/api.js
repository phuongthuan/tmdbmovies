import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const key = '137efd2d370db5e4c53251137cd907df';

async function fetchMovie(type, option) {
    return await api.get(`${type}/${option}?api_key=${key}&language=en-US&include_adult=false`);
}

async function fetchMoviePaginate(type, option, page) {
    return await api.get(`${type}/${option}?api_key=${key}&language=en-US&page=${page}&include_adult=false`);
}

export default {
    fetchMovie,
    fetchMoviePaginate
}