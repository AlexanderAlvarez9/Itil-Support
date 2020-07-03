import React from 'react';
import '../assets/styles/components/RollUpUser.scss'



const RollUpUser = () => {
  const categories = [];

  return (
    <React.Fragment>
      <div className="RollUpUser">
        <h2>ENROLAMIENTO DE USUARIOS</h2>

        <label htmlFor="name">Nombre</label>
        <input name="name" type="text" placeholder="Ingrese Nombre" />

        <label htmlFor="lastname">Apellido</label>
        <input name="lastname" type="text" placeholder="Ingrese Apellido" />

        <label htmlFor="email">Correo</label>
        <input name="email" type="text" placeholder="Ingrese Correo" />

        <label htmlFor="phone">Telefono</label>
        <input name="phone" type="text" placeholder="Ingrese Telefono" />

        <label htmlFor="address">Direccion</label>
        <input name="address" type="text" placeholder="Ingrese Direccion" />

        <label htmlFor="sla">SLA</label>
        <select name="sla" placeholder="Ingrese SLA" >
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>

        <label htmlFor="profile">Perfil</label>
        <input name="profile" type="text" placeholder="Ingrese Perfil" />

        <label htmlFor="password">Contraseña</label>
        <input name="password" type="text" placeholder="Ingrese Contraseña" />

        <button>Registrar</button>
      </div>
    </React.Fragment>
  )
}
export default RollUpUser;