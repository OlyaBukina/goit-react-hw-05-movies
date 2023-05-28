import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import {
  StyledList,
  StyledItem,
  StyledPoster,
  StyledTitle,
  StyledDate,
} from './MoviesList.styled';
import ReactPaginate from 'react-paginate';

import css from './Pagination.module.css';

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';

const MovieList = ({ movies, onClick, totalPages }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const { pagContainer, pagButton, activeBtn } = css;
  return (
    <>
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

      {totalPages > 1 && (
        <ReactPaginate
          key={query}
          previousLabel={<AiOutlineArrowLeft />}
          nextLabel={<AiOutlineArrowRight />}
          pageClassName={pagButton}
          pageLinkClassName={pagButton}
          previousClassName={pagButton}
          previousLinkClassName={pagButton}
          nextClassName={pagButton}
          nextLinkClassName={pagButton}
          breakLabel="..."
          breakClassName={pagButton}
          breakLinkClassName={pagButton}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={onClick}
          containerClassName={pagContainer}
          activeClassName={activeBtn}
        />
      )}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default MovieList;
