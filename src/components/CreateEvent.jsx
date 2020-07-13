import React from 'react';
import '../assets/styles/components/CreateEvent.scss'

class CreateEvent extends React.Component {
  constructor() {
    super()
    this.category = React.createRef()
  }

  updateSub() {
    const subC1 = ["CPU", "Teclado", "Mouse"];
    const subC2 = ["Office", "Chrome", "Email"];
    const subC3 = ["Internet", "Telefono", "Servidor", "Wifi"];
    console.log("Hola");
  }

  render() {
    return (
      <React.Fragment>
        <div className="CreateEvent">
          <h2>CREAR NUEVO EVENTO</h2>

          <label htmlFor="serviceName">Descripcion de la Falla</label>
          <input name="serviceName" type="text" placeholder="Ingrese Descripcion de la Falla" />

          <label htmlFor="serviceType">Seleccione Tipo de Afectacion</label>
          <select onChange={this.updateSub} ref={this.category} className="serviceType" name="serviceType" placeholder="Seleccione tipo de afectacion" >
            <option disabled value="0">Seleccione</option>
            <option value="1">Hardware</option>
            <option value="2">Software</option>
            <option value="3">Redes - Networking</option>
          </select>

          <label htmlFor="serviceType">Seleccione Subcategoria</label>
          <select ref={this.category} className="serviceType" name="serviceType" placeholder="Seleccione subcategoria" >
            <option value="0"></option>
          </select>

          {this.category.value == 2 &&
            <h1>Hola</h1>
          }

          {/* <label htmlFor="serviceSla">Afectacion</label>
          <select name="serviceSla" placeholder="Seleccione SLA del servicio" >
            <option value="1">Operacion</option>
            <option value="2">Administracion</option>
            <option value="3">No Afecta</option>
          </select> */}

          <label htmlFor="serviceDesc">Descripcion</label>
          <textarea name="serviceDesc" type="text" placeholder="Ingrese Descripcion" />
          <button>Registrar</button>
        </div>
      </React.Fragment>
    )
  }
}
export default CreateEvent;