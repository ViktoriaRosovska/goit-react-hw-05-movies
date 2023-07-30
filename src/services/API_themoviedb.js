import axios from 'axios';

const API_KEY = '155fd1058fa7dc1bb176bb56763cf055';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmZDEwNThmYTdkYzFiYjE3NmJiNTY3NjNjZjA1NSIsInN1YiI6IjY0ODcwYjQ3ZDJiMjA5MDBjYTIwOTE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReF_4djAJ8MaS0bbNh3cwWkp4GrcY4fs260diJiCPl4';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: false,
  page: 1,
};
const config = {
  headers: { Authorization: `Bearer ${token}` },
  accept: 'application/json',
};

const getMoviesTrending = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day?`, config);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

const searchMovie = async (query, page = 1) => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${query}&page=${page}`,
      config
    );
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

const getMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, config);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

const getMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, config);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, config);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

export {
  getMoviesTrending,
  searchMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
