import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getMovieById, getPecentageValue, getGenres } from '../../Api/fetchApi';
import {
  MovieWrapper,
  MovieInfoWrapper,
  MoviePoster,
  StyledLink,
  MovieMainTitle,
  MovieScore,
  MovieInfoTitle,
  MovieInfoDesc,
  MovieExtraInfo,
  ExtraInfoTitle,
  ExtraInfoList,
  ExtraInfoLink,
} from './MoviePage.styled';

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';

const MoviePage = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieInfo = async () => {
      if (!movieId) return;
      try {
        const response = await getMovieById(movieId);
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieInfo();
  }, [movieId, setMovieInfo]);

  const { poster_path, title, vote_average, genres, overview, release_date } =
    movieInfo;
  const allGenres = getGenres(genres);
  const releaseDate = release_date ? release_date.slice(0, 4) : `Unknown`;
  return (
    <div>
      <StyledLink to={backLinkLocationRef.current}>
        <AiOutlineArrowLeft />
        Go back
      </StyledLink>

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

      <MovieExtraInfo>
        <ExtraInfoTitle>Additional information</ExtraInfoTitle>
        <ExtraInfoList>
          <ExtraInfoLink to="cast">Cast</ExtraInfoLink>

          <ExtraInfoLink to="reviews">Reviews</ExtraInfoLink>
        </ExtraInfoList>

        <Outlet />
      </MovieExtraInfo>
    </div>
  );
};

export default MoviePage;
