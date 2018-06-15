import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const key = '137efd2d370db5e4c53251137cd907df';

async function fetchMovie(option) {
    return await api.get(`movie/${option}?api_key=${key}&language=en-US&include_adult=false`);
}

export default {
    fetchMovie
}