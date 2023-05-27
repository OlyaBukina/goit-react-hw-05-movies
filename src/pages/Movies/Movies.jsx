import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMoviesByKeyword } from '../../Api/fetchApi';
import { SearchForm, SearchFild, SearchButton } from './Movies.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const onFormSubmit = (values, { resetForm }) => {
    const nextParams = values.query !== '' ? { query: values.query } : {};
    setSearchParams(nextParams);
    resetForm();
  };

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        setIsLoading(true);
        setMoviesList([]);
        const respons = await getMoviesByKeyword(query, page);
        const movies = respons.data.results;
        const totalPages = respons.data.total_pages;
        setTotalPages(totalPages);
        if (movies.length === 0) {
          toast.error(
            'Search result not successful. Enter the correct movie name.'
          );
          setSearchParams({});
        }
        setMoviesList(movies);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [query, setSearchParams, page]);

  const handlePageChange = event => {
    setPage(event.selected + 1);
  };
  return (
    <>
      <Formik initialValues={{ query: '' }} onSubmit={onFormSubmit}>
        <SearchForm>
          <SearchFild
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Movie name..."
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </Formik>
      {isLoading && <Loader />}
      {moviesList && (
        <MoviesList
          movies={moviesList}
          state={{ from: location }}
          onClick={handlePageChange}
          totalPages={totalPages}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Movies;
