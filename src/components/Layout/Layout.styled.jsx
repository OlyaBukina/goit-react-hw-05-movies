import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container.styled';

export const NavWrapper = styled.nav`
  background-color: #032541;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 14px 24px;
  line-height: 1.16;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  border-radius: 15px;
  cursor: pointer;

  &.active {
    color: #01b4e4;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 12px 22px;
  }
`;

export const NavContainer = styled(Container)`
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  gap: 4px;
  align-items: center;
  @media screen and (min-width: 1280px) {
    gap: 8px;
  }
`;
