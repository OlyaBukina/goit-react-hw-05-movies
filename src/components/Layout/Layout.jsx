import { Outlet } from 'react-router-dom';
import { NavLinkStyled, NavWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <NavWrapper>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </NavWrapper>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
