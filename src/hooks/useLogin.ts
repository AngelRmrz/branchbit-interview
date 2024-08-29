import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '@/context/AuthContext';

type LoginForm = {
  userName: string;
  password: string;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  const [attempts, setAttempts] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data: LoginForm) => {
    if (isDisabled) return;

    try {
      const response = await axios.post('/api/login', {
        username: data.userName,
        password: data.password,
      });

      if (response.status === 200) {
        login(response.data.user);
        navigate('/form-user');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setAttempts((prev) => prev + 1);
        if (attempts >= 2) {
          setIsDisabled(true);
          console.error('Maximum login attempts exceeded.');
        } else {
          console.error('Invalid credentials');
        }
      } else {
        console.error('Error logging in:', error);
      }
    }
  };

  return {
    handleLogin,
    attempts,
    isDisabled,
  };
};
