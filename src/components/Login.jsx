import React from 'react';
import '../assets/styles/components/Login.scss'



const Login = () => {
  const categories = ['carne', 'lacteos', 'enlatados', 'vegetales', 'snacks'];

  return (
    <React.Fragment>
      <div className="Login">
        <h2>Iniciar Sesion</h2>
        <label htmlFor="email">Correo</label>
        <input id="email" type="text" placeholder="Ingrese su correo" />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="text" placeholder="Ingrese su Contraseña" />

        <button>Iniciar sesion</button>
      </div>
    </React.Fragment>
  )
}
export default Login;