import { Link, useLocation } from 'react-router-dom';
import {
  StyledList,
  StyledItem,
  StyledPoster,
  StyledTitle,
  StyledDate,
} from './MoviesList.styled';

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <StyledItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <StyledPoster
              src={poster_path ? `${posterUrl}${poster_path}` : noPosterUrl}
              alt="Movie poster"
            />
            <StyledTitle>
              {title.length > 26 ? `${title.slice(0, 26)}${' ...'}` : title}
            </StyledTitle>
            <StyledDate>
              {release_date ? release_date.slice(0, 4) : `Unknown`}
            </StyledDate>
          </Link>
        </StyledItem>
      ))}
    </StyledList>
  );
};
export default MovieList;
