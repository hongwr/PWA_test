import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header';

const Home = () => {
  return (
    <>
      <Header />
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    </>
  );
};

export default Home;

const HomeLayout = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  background-color: red;
`;
