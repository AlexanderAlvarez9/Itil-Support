import React from 'react';
import Containers from '../containers/Containers';
import Login from './Login';

const Index = () => {
  return (
    <Containers>
      <h1>Bienvenido al sistema de gestion de incidencias</h1>
      <Login />
    </Containers>
  )
}

export default Index;