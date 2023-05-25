import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { getMovieById, getPecentageValue, getGenres } from '../../Api/fetchApi';

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';

const MoviePage = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const response = await getMovieById(movieId);
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieInfo();
  }, [movieId, setMovieInfo]);

  const { poster_path, title, vote_average, genres, overview } = movieInfo;
  const allGenres = getGenres(genres);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        <img
          src={poster_path ? `${posterUrl}${poster_path}` : noPosterUrl}
          alt="Movie poster"
        />
        <h2>{title}</h2>
        <p>
          User score:{' '}
          {vote_average ? getPecentageValue(vote_average) : 'unknow'}
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres ? allGenres : 'Unknow'}</p>
      </div>
      <div>
        <h4>Additional information</h4>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviePage;
