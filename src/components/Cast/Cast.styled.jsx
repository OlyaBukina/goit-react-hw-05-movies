import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ActorPoster = styled.img`
  min-height: 250px;
  background-color: #dbdbdb;
  border-radius: 10px;
`;

export const ActorName = styled.p`
  padding-top: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const ActorCharacter = styled.p`
  font-size: 14px;
  padding-bottom: 10px;
`;
