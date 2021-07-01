import axios from 'axios';

const searchMovieByKeyword = async (key, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

const getDataMovieById = async (id = 0) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  searchMovieByKeyword,
  getDataMovieById
}