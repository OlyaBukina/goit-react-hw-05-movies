import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchForm, SearchFild, SearchButton } from './Movies.styled';
import MoviesList from '../../components/MovieList/MovieList';

import { fetchMoveis } from '../../Api/fetchMovies';

const getMovieByIdUrl = `https://api.themoviedb.org/3/search/movie`;

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
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
        const respons = await fetchMoveis(getMovieByIdUrl, query);
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
      }
    };
    getMovies();
  }, [query, setSearchParams]);
  return (
    <div>
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
      {moviesList && <MoviesList movies={moviesList} />}
      <ToastContainer />
    </div>
  );
};

export default Movies;
