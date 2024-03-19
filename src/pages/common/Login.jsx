import React, { useState } from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles/global/fontStyles';
import { useLogin } from '../../hooks/apiHooks/LoginApiHook';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = useLogin();

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <LoginLayout>
      <H1>로그인</H1> id : <Input onChange={handleChange} value={id} />
      password : <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      <LoginButton onClick={() => handleLogin(id, password)}>로그인</LoginButton>
      {/* <LoginButton onClick={clickTestButton}>test</LoginButton> */}
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightblue;
`;

const Input = styled.input`
  width: 100px;
  height: 30px;
`;

const LoginButton = styled.button`
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
