// src/components/superadmin/AccountManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await axios.get('http://localhost:3000/api/auth/accounts'); // Asegúrate de tener una ruta adecuada en el backend para esto
      setAccounts(response.data);
    };
    fetchAccounts();
  }, []);

  return (
    <div>
      <h2>Gestión de Cuentas de Administradores</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account._id}>
            {account.usuario} - {account.estado}
            {/* Agrega botones o enlaces para cambiar estado o eliminar cuenta */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountManagement;