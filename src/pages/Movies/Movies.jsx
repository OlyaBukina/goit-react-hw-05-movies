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
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({
    query: searchParams.get('query') ?? '',
    page: 1,
  });
  const location = useLocation();

  const onFormSubmit = (values, { resetForm }) => {
    const nextParams = values.query !== '' ? { query: values.query } : {};
    setSearchParams(nextParams);

    setParams({ query: values.query, page: 1 });
    resetForm();
  };

  useEffect(() => {
    const { query, page } = params;
    if (!query) return;
    const getMovies = async () => {
      try {
        setIsLoading(true);
        setMoviesList([]);
        const response = await getMoviesByKeyword(query, page);
        const movies = response.data.results;
        const totalPages = response.data.total_pages;
        if (movies.length === 0) {
          toast.error(
            'Search result not successful. Enter the correct movie name.'
          );
          setParams({ ...params, query: '', page: 1 });
        }
        setTotalPages(totalPages);
        setMoviesList(movies);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [params]);

  const handlePageChange = event => {
    setParams({ ...params, page: event.selected + 1 });
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
