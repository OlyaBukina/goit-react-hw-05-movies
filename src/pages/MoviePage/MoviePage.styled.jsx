import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

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

export const MovieExtraInfo = styled.div`
  padding: 15px;
  /* padding-top: 15px;
  padding-bottom: 15px; */
`;

export const ExtraInfoTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 7px;
`;
export const ExtraInfoList = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
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
  width: 110px;
  &.active {
    border: 1.5px solid #01b4e4;
    background-color: #fff;
    color: #01b4e4;
  }
`;
