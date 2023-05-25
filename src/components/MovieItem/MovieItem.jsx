import { Link } from 'react-router-dom';
const MovieItem = ({ movie, location }) => {
  const { id, title } = movie;
  console.log(location);
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;
