import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../Api/fetchApi';

import {
  ReviewsWrapper,
  ReviewsList,
  ReviewsItem,
  ReviewAuthor,
  ReviewContent,
  DefaultReview,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      if (!movieId) return;
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
    <ReviewsWrapper>
      {reviews.length === 0 && (
        <DefaultReview>We don't have any reviews for this film</DefaultReview>
      )}
      {reviews.length > 0 && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewAuthor>Author: {author}</ReviewAuthor>
              <ReviewContent>{content}</ReviewContent>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </ReviewsWrapper>
  );
};
export default Reviews;
