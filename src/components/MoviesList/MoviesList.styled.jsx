import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
`;

export const StyledItem = styled.li`
  cursor: pointer;
`;

export const StyledPoster = styled.img`
  min-height: 402px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    min-width: 180px;
  }

  @media screen and (min-width: 1280px) {
    /* min-width: 292px; */
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const StyledTitle = styled.p`
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  line-height: 1.33;
  /* height: 16px; */
  /* overflow: hidden; */
  color: #000;

  @media screen and (min-width: 1280px) {
    height: 24px;
    font-style: normal;
    font-size: 16px;
    line-height: 1.2;
  }
`;

export const StyledDate = styled.p`
  color: #00457d;
  font-weight: 700;
  font-size: 16px;
`;
