import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

const params = {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "en-US",
      page: 1
  }
}

const videos = {
  append_to_response: "videos"
}

const { params: {api_key, language} } = params;

export const moviesNowPlaying = () => api.get("/movie/now_playing", params);
export const getMovieDetail = id => api.get(`/movie/${id}`, {params: {api_key, language, ...videos}});
export const popularMovies = () => api.get("/movie/popular", params);
export const showPopular = () => api.get("/tv/popular", params);
export const showOnTheAir = () => api.get("/tv/on_the_air", params);
export const getShowDetail = id => api.get(`/tv/${id}`, {params: {api_key, language, ...videos}});