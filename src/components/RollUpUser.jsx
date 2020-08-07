import React, { useState } from 'react';
import '../assets/styles/components/RollUpUser.scss'
import { db } from '../firebase';

const RollUpUser = (props) => {

  const initialStateValues = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    profile: '',
    password: '',
  };

  const [values, setValues] = useState(initialStateValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  return (
    <React.Fragment>
      <form className="RollUpUser" onSubmit={handleSubmit}>
        <h2>ENROLAMIENTO DE USUARIOS</h2>

        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          type="text"
          placeholder="Ingrese Nombre"
          value={values.name}
          onChange={handleInputChange}
        />

        <label htmlFor="lastname">Apellido</label>
        <input
          name="lastname"
          type="text"
          placeholder="Ingrese Apellido"
          value={values.lastname}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Correo</label>
        <input
          name="email"
          type="text"
          placeholder="Ingrese Correo"
          value={values.email}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">Telefono</label>
        <input
          name="phone"
          type="text"
          placeholder="Ingrese Telefono"
          value={values.phone}
          onChange={handleInputChange}
        />

        <label htmlFor="address">Direccion</label>
        <input
          name="address"
          type="text"
          placeholder="Ingrese Direccion"
          value={values.address}
          onChange={handleInputChange}
        />

        <label htmlFor="sla">SLA</label>
        <select
          name="sla"
          placeholder="Ingrese SLA"
          value={values.sla}
          onChange={handleInputChange}>
          <option value=""></option>
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>

        <label htmlFor="profile">Perfil</label>
        <select
          name="profile"
          value={values.url}
          onChange={handleInputChange}
        >
          <option value=""></option>
          <option value="1">Usuario</option>
          <option value="2">Tecnico</option>
          <option value="3">Administrador</option>
        </select>

        <label htmlFor="password">Contraseña</label>
        <input
          name="password"
          type="text"
          placeholder="Ingrese Contraseña"
          value={values.password}
          onChange={handleInputChange}
        />

        <button>Registrar</button>
      </form>
    </React.Fragment>
  )
}
export default RollUpUser;