import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TestPage3 = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <Button onClick={() => navigate('/testpage4')}>test3333333333333333 page 입니다.</Button>
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: green;
`;

const Button = styled.button`
  background-color: yellow;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export default TestPage3;
