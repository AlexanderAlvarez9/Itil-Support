import React from 'react';
import '../assets/styles/components/MyEvents.scss'

const MyEvents = () => {
  const categories = [];

  return (
    <React.Fragment>
      <div className="MyEvents">
        <h2>Mis Casos Creados</h2>

        <table border="1">
          <thead>
            <tr>
              <th>Numero de Caso</th>
              <th>Usuario</th>
              <th>Prioridad</th>
              <th>Hora de Creacion</th>
              <th>Tiempo Restante</th>
              <th>Estado</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>10001</th>
              <td>Pedro</td>
              <td>Alta</td>
              <td>11:09 p. m. 12/07/2020</td>
              <td>1 Hora</td>
              <th>Abierto</th>
              <td><a href="/event/details">Ver Mas</a></td>
            </tr>
          </tbody>
        </table>


      </div>
    </React.Fragment>
  )
}
export default MyEvents;