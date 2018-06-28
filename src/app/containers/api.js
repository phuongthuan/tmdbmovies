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
    return await api.get(`${type}/${id}?api_key=${key}&language=en-US&include_adult=false&append_to_response=videos,images,credits,recommendations,release_dates,keywords,reviews`);
}

async function searchMultiData(type, query) {
    return await api.get(`${type}?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`);
}

async function fetchGenres(type) {
    return await api.get(`genre/${type}/list?api_key=${key}&language=en-US&include_adult=false`)
}

async function filterData(type, year = null, sort_by = null) {
    return await api.get(`discover/${type}?api_key=${key}&language=en-US&include_adult=false&primary_release_year=${year}&sort_by=${sort_by}&vote_count.gte=0&media_type=${type}`)
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
    filterData
}