// src/components/superadmin/SuperAdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const SuperAdminDashboard = () => {
  return (
    <div>
      <h2>Superadministrador Dashboard</h2>
      <ul>
        <li><Link to="/superadmin/institutions">Crear Instituciones Educativas</Link></li>
        <li><Link to="/superadmin/accounts">Gestión de Cuentas de Administradores</Link></li>
      </ul>
    </div>
  );
};

export default SuperAdminDashboard;