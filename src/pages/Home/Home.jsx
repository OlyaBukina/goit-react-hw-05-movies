import { useState, useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchMoveis } from '../../Api/fetchMovies';
import MoviesList from '../../components/MovieList/MovieList';

const getTrendesUrl = `https://api.themoviedb.org/3/trending/movie/day?`;

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const respons = await fetchMoveis(getTrendesUrl);
        const movies = respons.data.results;
        setMoviesList(movies);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={moviesList} />
      <ToastContainer />
    </>
  );
};

export default Home;
