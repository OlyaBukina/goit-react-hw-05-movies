import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getTrendingMovies } from '../../Api/fetchApi';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const respons = await getTrendingMovies(page);
        const totalPages = respons.data.total_pages;
        const movies = respons.data.results;
        setMoviesList(movies);
        setTotalPages(totalPages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [page]);

  const handlePageChange = event => {
    setPage(event.selected + 1);
  };
  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      <MoviesList
        movies={moviesList}
        state={{ from: location }}
        onClick={handlePageChange}
        totalPages={totalPages}
      />

      <ToastContainer />
    </>
  );
};

export default Home;
