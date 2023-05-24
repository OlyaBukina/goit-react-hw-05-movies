// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';
import { Container } from './Container/Container.styled';
import Layout from './Layout/Layout';
import Movies from '../pages/Movies/Movies';
import Home from '../pages/Home/Home';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
