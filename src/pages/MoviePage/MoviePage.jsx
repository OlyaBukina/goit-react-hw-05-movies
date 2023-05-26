import { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getMovieById } from '../../Api/fetchApi';
import { Loader } from '../../components/Loader/Loader';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import {
  StyledLink,
  MovieExtraInfo,
  ExtraInfoTitle,
  ExtraInfoList,
  ExtraInfoLink,
} from './MoviePage.styled';

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

  return (
    <div>
      <StyledLink to={backLinkLocationRef.current}>
        <AiOutlineArrowLeft />
        Go back
      </StyledLink>

      <MovieDescription movieInfo={movieInfo} />

      <MovieExtraInfo>
        <ExtraInfoTitle>Additional information</ExtraInfoTitle>
        <ExtraInfoList>
          <ExtraInfoLink to="cast">Cast</ExtraInfoLink>

          <ExtraInfoLink to="reviews">Reviews</ExtraInfoLink>
        </ExtraInfoList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MovieExtraInfo>
    </div>
  );
};

export default MoviePage;
