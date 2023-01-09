import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';

import HomePage from '../pages/homePage/HomePage';
import MatchPage from '../pages/MatchPage/MatchPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/match/:matchID" element={<MatchPage />} />
      </Routes>
    </>
  );
};

export default App;
