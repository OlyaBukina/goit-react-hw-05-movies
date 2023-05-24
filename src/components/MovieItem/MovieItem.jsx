import { Link } from 'react-router-dom';
const MovieItem = ({ movie: { id, title } }) => {
  return (
    <li>
      <Link to={`${id}`}>{title}</Link>
    </li>
  );
};

export default MovieItem;
