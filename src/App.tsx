import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { FormUser } from '@/pages/FormUser';
import { Layout } from '@/components/Layout';
import { Unauthorized } from '@/pages/Unauthorized';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="form-user" element={<FormUser />} />
          <Route path="*" element={<Unauthorized />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
