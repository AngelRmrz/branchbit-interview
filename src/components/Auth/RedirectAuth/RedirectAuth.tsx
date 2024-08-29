import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '@/context/AuthContext';

interface RedirectAuth {
  children: JSX.Element;
}

const RedirectAuth: React.FC<RedirectAuth> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/form-user" />;
  }

  return children;
};

export default RedirectAuth;
