import AuthContext from '@/context/AuthContext';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@/components/AppBar';

const Layout: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {user && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <AppBar logout={logout} />
        </div>
      )}
      <div className="flex-grow pt-16 p-4 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
