import PropTypes from 'prop-types';

import {
  MovieWrapper,
  MovieInfoWrapper,
  MoviePoster,
  MovieMainTitle,
  MovieScore,
  MovieInfoTitle,
  MovieInfoDesc,
} from './MovieDescription.styled';
import { getPecentageValue, getGenres } from '../../Api/fetchApi';

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';

const MovieDescription = ({
  movieInfo: {
    poster_path,
    title,
    vote_average,
    genres,
    overview,
    release_date,
  },
}) => {
  const allGenres = getGenres(genres);
  const releaseDate = release_date ? release_date.slice(0, 4) : `Unknown`;
  return (
    <MovieWrapper>
      <MoviePoster
        src={poster_path ? `${posterUrl}${poster_path}` : noPosterUrl}
        alt="Movie poster"
      />
      <MovieInfoWrapper>
        <MovieMainTitle>
          {title}
          {` (${releaseDate})`}
        </MovieMainTitle>
        <MovieScore>
          User score:{' '}
          {vote_average ? getPecentageValue(vote_average) : 'unknow'}
        </MovieScore>
        <MovieInfoTitle>Overview</MovieInfoTitle>
        <MovieInfoDesc>{overview}</MovieInfoDesc>
        <MovieInfoTitle>Genres</MovieInfoTitle>
        <MovieInfoDesc>{genres ? allGenres : 'Unknow'}</MovieInfoDesc>
      </MovieInfoWrapper>
    </MovieWrapper>
  );
};

MovieDescription.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.object),
    overview: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieDescription;
