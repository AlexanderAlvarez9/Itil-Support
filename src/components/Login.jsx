import React from 'react';
import '../assets/styles/components/Login.scss'



const Login = () => {

  return (
    <React.Fragment>
      <div className="Login">
        <h2>Iniciar Sesion</h2>
        <div className="inputBox">

          <label htmlFor="email">Correo</label>
          <input id="email" type="text" placeholder="Ingrese su correo" />
        </div>
        <div className="inputBox">
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="text" placeholder="Ingrese su Contraseña" />
        </div>

        <div className="Login--Action">
          <input className="Login--Action__checkbox" type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember" className="Login--Action__text" id="remember-text">Recordarme</label>
          <a className="Login--Action__forgot" href="/forgot">¿Has olvidado tu contraseña?</a>
        </div>

        <button>Iniciar sesion</button>
      </div>
    </React.Fragment>
  )
}
export default Login;