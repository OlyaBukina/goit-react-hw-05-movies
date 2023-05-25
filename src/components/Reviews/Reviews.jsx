import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../Api/fetchApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const reviews = await getReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews();
  }, [movieId]);
    
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
