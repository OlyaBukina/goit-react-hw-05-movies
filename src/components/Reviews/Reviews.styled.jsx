import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewsItem = styled.li`
  padding: 5px 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ReviewAuthor = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ReviewContent = styled.p`
  font-size: 14px;
`;

export const DefaultReview = styled.p`
  font-size: 20px;
`
