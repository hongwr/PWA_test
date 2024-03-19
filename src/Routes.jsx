import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import TestPage1 from './TestPage1';
import TestPage2 from './TestPage2';
import TestPage3 from './TestPage3';
import TestPage4 from './TestPage4';
import { pagePaths } from './constants/path';
import Login from './pages/common/Login';
import ErrorPage from './pages/common/ErrorPage';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path={pagePaths.home} element={<Login />} />
      <Route path={'*'} element={<ErrorPage />} />
      <Route element={<Home />}>
        <Route path={pagePaths.testpage1} element={<TestPage1 />} />
        <Route path={pagePaths.testpage2} element={<TestPage2 />} />
        <Route path={pagePaths.testpage3} element={<TestPage3 />} />
        <Route path={pagePaths.testpage4} element={<TestPage4 />} />
      </Route>
    </Routes>
  );
};

export default RoutesIndex;
