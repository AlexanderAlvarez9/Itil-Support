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



        <label htmlFor="serviceType">Recategorizar</label>
        <select name="serviceType" placeholder="Seleccione tipo del servicio" >
          <option value="1">Hardware</option>
          <option value="2">Software</option>
          <option value="3">Redes - Networking</option>
        </select>

        <label htmlFor="serviceDesc">Notas</label>
        <textarea name="serviceDesc" type="text" placeholder="Ingrese Descripcion" />
        <button>Registrar</button>
      </div>
    </React.Fragment>
  )
}
export default DetailsEvent;