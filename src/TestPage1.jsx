import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAccountRead, useClickTestButton } from './hooks/apiHooks/AccountReadApiHook';

const TestPage1 = () => {
  const [readData, setReadData] = useState({});
  const navigate = useNavigate();
  const getAccountRead = useAccountRead();
  const clickButton = useClickTestButton(setReadData);

  return (
    <Div>
      <Button onClick={() => navigate('/testpage2')}>test1 page 입니다.</Button>
      <Button onClick={clickButton}>api button</Button>
      {Object.keys(readData).length === 0 ? (
        <div>'데이터 없음'</div>
      ) : (
        Object.entries(readData).map(([key, value]) => {
          return (
            <div key={key}>
              {key} : {value}
            </div>
          );
        })
      )}
    </Div>
  );
};

const Div = styled.div`
  height: 100%;
  width: 100vw;
  background-color: blue;
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

export default TestPage1;
