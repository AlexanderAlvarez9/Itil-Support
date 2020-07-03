import React from 'react';
import '../assets/styles/components/Menu.scss'

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="menu">
          <ol className="menu--name">
            <span>Suppourtil</span>
          </ol>
          <ol className="menu--items">
            <li><a href="/">Login</a></li>
            <li><a href="/">Enrrolar Nuevos Usuarios</a></li>
            <li><a href="/">Enrrolar Servicio</a></li>
            <li><a href="/">Crear Evento</a></li>
            <li><a href="/">Listado Casos</a></li>
          </ol>
          <ol className="menu--close-sesion">
            <span>Cerrar Sesion</span>
          </ol>
        </nav>
      </React.Fragment>
    )
  }
}

export default Menu;