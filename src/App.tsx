import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { FormUser } from '@/pages/FormUser';
import { Layout } from '@/components/Layout';
import { Unauthorized } from '@/pages/Unauthorized';
import { AuthProvider } from './context/AuthContext';
import { RequiereAuth } from './components/Auth/RequiereAuth';
import { RedirectAuth } from './components/Auth/RedirectAuth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RedirectAuth>
                  <Login />
                </RedirectAuth>
              }
            />
            <Route
              path="form-user"
              element={
                <RequiereAuth>
                  <FormUser />
                </RequiereAuth>
              }
            />
            <Route path="*" element={<Unauthorized />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
