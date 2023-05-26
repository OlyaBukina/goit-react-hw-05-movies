import { Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
