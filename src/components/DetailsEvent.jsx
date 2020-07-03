import React from 'react';
import '../assets/styles/components/DetailsEvent.scss'

const DetailsEvent = () => {
  const categories = [];

  return (
    <React.Fragment>
      <div className="DetailsEvent">
        <h2>DETALLE DEL EVENTO # 12345</h2>

        <p>ID del Caso: <span>12345</span></p>
        <p>Tiempo Restante: <span>7 Horas 15 Minutos</span></p>
        <p>Usuario Afectado: <span>Carlos</span></p>
        <p>Direccion: <span>Oficina 5, Piso 4</span></p>
        <p>Tipo: <span>Incidente</span></p>
        <p>Categoria: <span>Hardware</span></p>
        <p>Descripcion: <span>Tengo un problema en la computadora</span></p>



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
export default DetailsEvent;