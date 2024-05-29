import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SuperAdminDashboard from './components/superadmin/SuperAdminDashboard';
import InstitutionManagement from './components/superadmin/InstitutionManagement';
import AccountManagement from './components/superadmin/AccountManagement';
import ProtectedRoute from './components/common/ProtectedRoute';

const Home = () => <h2>Bienvenido a Proyecto EvaEduca</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute roles={['SuperAdministrador']} />}>
            <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/superadmin/institutions" element={<InstitutionManagement />} />
            <Route path="/superadmin/accounts" element={<AccountManagement />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;