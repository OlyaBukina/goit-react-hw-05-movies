import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMoviesByKeyword } from '../../Api/fetchApi';
import { SearchForm, SearchFild, SearchButton } from './Movies.styled';
import MoviesList from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';


const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        const respons = await getMoviesByKeyword(query);
        const movies = respons.data.results;
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
  }, [query, setSearchParams]);
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
      {moviesList && <MoviesList movies={moviesList} />}
      <ToastContainer />
    </>
  );
};

export default Movies;
