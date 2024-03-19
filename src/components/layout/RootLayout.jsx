import React from 'react';
import styled from 'styled-components';

const RootLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;

const Layout = styled.div`
  height: auto;
  width: 100vw;
  background-color: yellow;
`;
