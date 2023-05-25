import axios from 'axios';

const API_KEY = 'd66303a9f2f21ddca222463dbeed564f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  try {
    return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
};


export const getMoviesByKeyword = async (query) => {
  try {
    return await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
};

export async function getMovieById(movieId) {
  try {
    const movie = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return movie.data;
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
}

export async function getCast(movieId) {
  try {
    const cast = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return cast.data.cast;
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
}

export async function getReviews(movieId) {
  try {
    const reviews = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return reviews.data.results ;
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
}

export function getPecentageValue(voteAverage) {
  if (!voteAverage) {
    return;
  }
  const percent = (voteAverage * 10).toFixed();
  return `${percent}%`;
}

export function getGenres(genres) {
  if (!genres) {
    return;
  }
  const allGenres = genres.map(genre => genre.name).join(', ');
  return allGenres;
}
