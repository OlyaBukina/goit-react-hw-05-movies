import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 5px;
  background-color: #01b4e4;
  border: 1.5px solid #01b4e4;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 110px;
  &:hover {
    border-color: #01b4e4;
    background-color: #fff;
    color: #01b4e4;
  }
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

export const MovieExtraInfo = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const ExtraInfoTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 7px;
`;
export const ExtraInfoList = styled.div`
  display: flex;
  gap: 7px;
`;
export const ExtraInfoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 5px;
  background-color: #01b4e4;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 110px;
  &.active {
    border: 1.5px solid #01b4e4;
    background-color: #fff;
    color: #01b4e4;
  }
`;
