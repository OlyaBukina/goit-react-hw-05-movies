import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container.styled';

export const NavLinkStyled = styled(NavLink)`
  padding: 14px 24px;
  line-height: 1.16;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #687c52;
  color: #000;
  border: 1px solid #000;
  border-radius: 15px;
  cursor: pointer;

  &.active {
    background-color: #000;
    color: #687c52;
    border-color: #687c52;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 12px 22px;
  }
`;

export const NavWrapper = styled.nav`
  background-color: #aab0a4;
`;

export const NavContainer = styled(Container)`
  /* padding: 14px 14px 20px 14px; */
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  gap: 4px;
  align-items: center;
  @media screen and (min-width: 1280px) {
    gap: 8px;
  }
`;
