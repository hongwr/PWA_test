import React from 'react';
import styled from 'styled-components';
import { palette } from '../../styles/global/globalStyles';

const Header = () => {
  return <HeaderLayout>Header입니다.</HeaderLayout>;
};

export default Header;

const HeaderLayout = styled.div`
  height: 60px;
  width: 100%;
  background-color: pink;
  color: ${palette.white};
`;
