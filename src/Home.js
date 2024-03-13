import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <Button onClick={() => navigate('/testpage1')}>ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅇㅁㄴ</Button>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: yellow;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
