import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';

import HomePage from '../pages/homePage/HomePage';
import MatchPage from '../pages/MatchPage/MatchPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/match/:matchID" element={<MatchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
