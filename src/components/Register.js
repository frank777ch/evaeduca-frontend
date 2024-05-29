import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    usuario: '',
    contraseña: '',
    dni: '',
    rol: 'Alumno',
    institucionID: '',
    celular: '',
    correoContacto: ''
  });
  const [instituciones, setInstituciones] = useState([]);

  useEffect(() => {
    // Obtener las instituciones del backend
    const fetchInstituciones = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/institutions');
        setInstituciones(response.data);
      } catch (error) {
        console.error('Error fetching institutions:', error);
      }
    };

    fetchInstituciones();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', formData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombres:</label>
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>
        <div>
          <label>Usuario:</label>
          <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required />
        </div>
        <div>
          <label>DNI:</label>
          <input type="text" name="dni" value={formData.dni} onChange={handleChange} required />
        </div>
        <div>
          <label>Rol:</label>
          <select name="rol" value={formData.rol} onChange={handleChange} required>
            <option value="Alumno">Alumno</option>
            <option value="Profesor">Profesor</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <div>
          <label>Institución:</label>
          <select name="institucionID" value={formData.institucionID} onChange={handleChange} required>
            <option value="">Seleccione una institución</option>
            {instituciones.map((institucion) => (
              <option key={institucion._id} value={institucion._id}>
                {institucion.nombre} (ID: {institucion._id})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Celular:</label>
          <input type="text" name="celular" value={formData.celular} onChange={handleChange} required />
        </div>
        <div>
          <label>Correo de contacto:</label>
          <input type="email" name="correoContacto" value={formData.correoContacto} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;