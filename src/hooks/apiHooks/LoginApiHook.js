import { authAPI } from '../../api/auth/authAPI';
import { useNavigate } from 'react-router-dom';
import { useLoginInfo } from '../../store/useLoginInfo';

export const useLogin = () => {
  const navigate = useNavigate();

  // zustand
  const { setLoginInfo } = useLoginInfo();

  const handleLogin = async (email, password) => {
    console.log(email, password, 'email, password');
    try {
      const response = await authAPI.login({ email: email, password: password });
      if (response.data.status === 'ok') {
        setLoginInfo(response.data.data.user);
        navigate('/testpage1');
      } else {
        console.log('로그인 실패');
      }
    } catch (error) {
      console.log(error, 'error');
      navigate('/errorpage');
    }
  };

  return handleLogin;
};
