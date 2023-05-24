import { StyledMoviesList } from './MovieList.styled';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </StyledMoviesList>
  );
};
export default MovieList;
