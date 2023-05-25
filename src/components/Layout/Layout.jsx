import { Outlet } from 'react-router-dom';
import { NavLinkStyled, NavWrapper, NavContainer } from './Layout.styled';
import { Container } from '../Container/Container.styled';

const Layout = () => {
  return (
    <>
      <NavWrapper>
        <NavContainer>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NavContainer>
      </NavWrapper>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
