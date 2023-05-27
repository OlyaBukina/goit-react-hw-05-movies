import axios from 'axios';

const API_KEY = 'c5a1db41bd5eb56af64be0ab647b8aee';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async page => {
  try {
    return await axios.get(`trending/movie/day?`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
};

export const getMoviesByKeyword = async (query, page) => {
  try {
    return await axios.get(`search/movie?`, {
      params: {
        api_key: API_KEY,
        page,
        query,
      },
    });
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
    const cast = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
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
    return reviews.data.results;
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
