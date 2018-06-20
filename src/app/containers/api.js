import axios from 'axios';


// https://api.themoviedb.org/3/movie/278?api_key=137efd2d370db5e4c53251137cd907df&language=en-US&include_adult=false&append_to_response=videos,images
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const key = '137efd2d370db5e4c53251137cd907df';

async function fetchData(type, option) {
    return await api.get(`${type}/${option}?api_key=${key}&language=en-US&include_adult=false`);
}

async function fetchDataPaginate(type, option, page) {
    return await api.get(`${type}/${option}?api_key=${key}&language=en-US&page=${page}&include_adult=false`);
}

async function fetchDataById(type, id) {
    return await api.get(`${type}/${id}?api_key=${key}&language=en-US&include_adult=false&append_to_response=videos,images`);
}

export default {
    fetchData,
    fetchDataPaginate,
    fetchDataById
}