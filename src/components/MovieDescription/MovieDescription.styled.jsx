import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const MoviePoster = styled.img`
  border-radius: 10px;
  height: 70vh;
`;

export const MovieMainTitle = styled.h2`
  font-size: 32px;
`;

export const MovieScore = styled.p`
  font-size: 18px;
  color: #00467f;
`;

export const MovieInfoTitle = styled.h3`
  font-size: 22px;
`;

export const MovieInfoDesc = styled.p`
  font-size: 16px;
`;
