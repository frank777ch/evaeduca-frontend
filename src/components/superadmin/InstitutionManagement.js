// src/components/superadmin/InstitutionManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstitutionManagement = () => {
  const [institutions, setInstitutions] = useState([]);
  const [newInstitution, setNewInstitution] = useState({
    nombre: '',
    tipo: '',
    direccion: '',
    ciudad: '',
    estado: '',
    pais: '',
    telefono: '',
    correo: '',
    paginaWeb: ''
  });

  useEffect(() => {
    const fetchInstitutions = async () => {
      const response = await axios.get('http://localhost:3000/api/institutions');
      setInstitutions(response.data);
    };
    fetchInstitutions();
  }, []);

  const handleChange = (e) => {
    setNewInstitution({ ...newInstitution, [e.target.name]: e.target.value });
  };

  const handleCreateInstitution = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/institutions/create', newInstitution);
      setInstitutions([...institutions, response.data.institucion]);
    } catch (error) {
      console.error('Error creating institution:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de Instituciones Educativas</h2>
      <form onSubmit={handleCreateInstitution}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={newInstitution.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Tipo:</label>
          <input type="text" name="tipo" value={newInstitution.tipo} onChange={handleChange} required />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" name="direccion" value={newInstitution.direccion} onChange={handleChange} required />
        </div>
        <div>
          <label>Ciudad:</label>
          <input type="text" name="ciudad" value={newInstitution.ciudad} onChange={handleChange} required />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={newInstitution.estado} onChange={handleChange} required />
        </div>
        <div>
          <label>País:</label>
          <input type="text" name="pais" value={newInstitution.pais} onChange={handleChange} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" name="telefono" value={newInstitution.telefono} onChange={handleChange} required />
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" name="correo" value={newInstitution.correo} onChange={handleChange} />
        </div>
        <div>
          <label>Página Web:</label>
          <input type="text" name="paginaWeb" value={newInstitution.paginaWeb} onChange={handleChange} />
        </div>
        <button type="submit">Crear Institución</button>
      </form>
      <ul>
        {institutions.map((inst) => (
          <li key={inst._id}>{inst.nombre} - {inst.tipo}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionManagement;