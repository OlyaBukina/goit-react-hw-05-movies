import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../Api/fetchApi';

import {
  CastList,
  CastItem,
  ActorPoster,
  ActorName,
  ActorCharacter,
} from './Cast.styled';

const posterUrl = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      if (!movieId) return;
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
    <CastList>
      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem key={id}>
          <ActorPoster
            src={profile_path ? `${posterUrl}${profile_path}` : defaultImg}
            alt="Poster"
          />
          <ActorName>{name}</ActorName>
          <ActorCharacter>Character: {character}</ActorCharacter>
        </CastItem>
      ))}
    </CastList>
  );
};
export default Cast;
