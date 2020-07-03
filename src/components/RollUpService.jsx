import React from 'react';
import '../assets/styles/components/RollUpService.scss'



const RollUpService = () => {
  const categories = [];

  return (
    <React.Fragment>
      <div className="RollUpService">
        <h2>ENROLAMIENTO DE SERVICIO</h2>

        <label htmlFor="serviceName">Nombre del Servicio</label>
        <input name="serviceName" type="text" placeholder="Ingrese Nombre del Servicio" />

        <label htmlFor="serviceType">Tipo del Servicio</label>
        <select name="serviceType" placeholder="Seleccione tipo del servicio" >
          <option value="1">Hardware</option>
          <option value="2">Software</option>
          <option value="3">Redes - Networking</option>
        </select>

        <label htmlFor="serviceSla">SLA del Servicio</label>
        <select name="serviceSla" placeholder="Seleccione SLA del servicio" >
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>

        <label htmlFor="serviceDesc">Descripcion</label>
        <textarea name="serviceDesc" type="text" placeholder="Ingrese Descripcion" />
        <button>Registrar</button>
      </div>
    </React.Fragment>
  )
}
export default RollUpService;