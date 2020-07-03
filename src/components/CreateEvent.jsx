import React from 'react';
import '../assets/styles/components/CreateEvent.scss'

const CreateEvent = () => {
  const categories = [];

  return (
    <React.Fragment>
      <div className="CreateEvent">
        <h2>CREAR EVENTO</h2>

        <label htmlFor="newServiceType">Tipo del Servicio</label>
        <select name="newServiceType" placeholder="Seleccione tipo del servicio" >
          <option value="1">Hardware</option>
          <option value="2">Software</option>
          <option value="3">Redes - Networking</option>
        </select>

        <label htmlFor="serviceName">Nombre del Servicio</label>
        <input name="serviceName" type="text" placeholder="Ingrese Nombre del Servicio" />

        <label htmlFor="serviceSla">Afectacion</label>
        <select name="serviceSla" placeholder="Seleccione SLA del servicio" >
          <option value="1">Operacion</option>
          <option value="2">Administracion</option>
          <option value="3">No Afecta</option>
        </select>

        <label htmlFor="serviceDesc">Descripcion</label>
        <textarea name="serviceDesc" type="text" placeholder="Ingrese Descripcion" />
        <button>Registrar</button>
      </div>
    </React.Fragment>
  )
}
export default CreateEvent;