import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../Api/fetchApi';

const posterUrl = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const cast = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [movieId]);
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={`${posterUrl}${actor.profile_path}`} alt="Actor" />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
