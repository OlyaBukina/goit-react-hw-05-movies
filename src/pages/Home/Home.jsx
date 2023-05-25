import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getTrendingMovies } from '../../Api/fetchApi';
import MoviesList from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const respons = await getTrendingMovies();
        const movies = respons.data.results;
        setMoviesList(movies);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      <MoviesList movies={moviesList} state={{ from: location }} />
      <ToastContainer />
    </>
  );
};

export default Home;
