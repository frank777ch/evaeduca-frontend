import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';  // Cambiar la importación

const useAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) return { isAuthenticated: false, userRole: '' };

  try {
    const decoded = jwtDecode(token);
    return { isAuthenticated: true, userRole: decoded.rol };
  } catch (error) {
    return { isAuthenticated: false, userRole: '' };
  }
};

const ProtectedRoute = ({ roles }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(userRole) === -1) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;