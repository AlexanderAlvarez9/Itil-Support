import React, { useState } from 'react';
import '../assets/styles/components/Login.scss'
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

const Login = () => {

  const [values, setValues] = useState('')
  const firebase = useFirebaseApp();
  const user = useUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const handleSingUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
    console.log('Creado', values.email, values.password);
  }

  const handlelogout = async () => {
    await firebase.auth().signOut();
  }

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password)

    } catch (error) {
      alert(error.message)
    }
  }

  console.log(user);

  return (
    <React.Fragment>

      {
        !user &&
        <div className="Login">
          <h2>Iniciar Sesion</h2>
          <div className="inputBox">

            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Ingrese su correo"
              onChange=""
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese su Contraseña"
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSingUp}>Crear Cuenta</button>
          <button onClick={handleSignIn}>Iniciar Sesion</button>
        </div>
      }

      {user &&


        <div className="Login">
          <h2>Sesion Activa</h2>
          <p>Usuario: {user.email}</p>
          <button onClick={handlelogout}>Cerrar Sesion</button>
        </div>
      }



    </React.Fragment>
  )
}
export default Login;