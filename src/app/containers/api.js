import axios from 'axios';

// https://api.themoviedb.org/3/movie/278?api_key=137efd2d370db5e4c53251137cd907df&language=en-US&include_adult=false&append_to_response=videos,images
// localhost:3000/discover/movie?page=1&language=en-US&primary_release_year=2018&sort_by=popularity.asc&vote_count.gte=0&media_type=movie

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

const key = '137efd2d370db5e4c53251137cd907df';

async function fetchData(url, page = 1, year = '', sort_by = '', type = '') {
    return await api.get(`${url}?api_key=${key}&page=${page}&language=en-US&primary_release_year=${year}&sort_by=${sort_by}&vote_count.gte=0&media_type=${type}`);
}

async function fetchDataDiscoverPagePaginate(url, page = 1, year = '', sort_by = '', type = '') {
    return await api.get(`${url}?api_key=${key}&page=${page}&language=en-US&primary_release_year=${year}&sort_by=${sort_by}&vote_count.gte=0&media_type=${type}`);
}

async function fetchDataPaginate(url, page) {
    return await api.get(`${url}?api_key=${key}&language=en-US&page=${page}`);
}

async function fetchDataById(url, id) {
    return await api.get(`${url}/${id}?api_key=${key}&language=en-US&append_to_response=videos,images,credits,recommendations,release_dates,keywords,reviews`);
}

async function searchMultiData(url, query) {
    return await api.get(`${url}?api_key=${key}&language=en-US&query=${query}&page=1`);
}

async function fetchGenres(type) {
    return await api.get(`genre/${type}/list?api_key=${key}&language=en-US`)
}

async function filterData(url, year = '', sort_by = '', type = '') {
    return await api.get(`${url}?api_key=${key}&language=en-US&primary_release_year=${year}&sort_by=${sort_by}&vote_count.gte=0&media_type=${type}`)
}


// function filterData(type, ...options) {
//     return (`discover/${type}?api_key=137efd2d370db5e4c53251137cd907df&language=en-US&include_adult=false&primary_release_year=${options[0]}&sort_by=${options[1]}&vote_count.gte=0&with_genres[]=${options}&media_type=${type}`)
// }

export default {
    fetchData,
    fetchDataPaginate,
    fetchDataById,
    searchMultiData,
    fetchGenres,
    filterData,
    fetchDataDiscoverPagePaginate,
}