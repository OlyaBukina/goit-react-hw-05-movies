import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  padding: 14px 24px;
  line-height: 1.16;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #fd6464;
  color: #000;
  border-radius: 100px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 12px 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 12px 22px;
  }
`;

export const NavWrapper = styled.nav`
  padding: 14px 14px 20px 14px;
  display: flex;
  gap: 4px;
  align-items: center;

  @media screen and (min-width: 1280px) {
    gap: 8px;
  }
`;
