import axios from 'axios';
import { toast } from 'react-toastify';
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

const getMoviesTrending = async (period = 'day') => {
  try {
    const { data } = await axios.get(`/trending/movie/${period}?`, config);
    return data;
  } catch (error) {
    return toast.error('Oops, there are no movies');
  }
};

const searchMovie = async (query, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&page=${page}`,
    config
  );
  return data;
};

const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, config);
  return data;
};

const getMovieCredits = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, config);
  return data;
};

const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, config);
  return data;
};

export {
  getMoviesTrending,
  searchMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
