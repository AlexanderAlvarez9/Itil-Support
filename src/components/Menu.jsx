import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Menu.scss';


class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="menu">
          <ol className="menu--name">
            <Link to="/Itil-Support/">Suppourtil</Link>
          </ol>
          <ol className="menu--items">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/new/user">Enrrolar Nuevos Usuarios</Link></li>
            <li><Link to="/new/service">Enrrolar Servicio</Link></li>
            <li><Link to="/new/issue">Crear Evento</Link></li>
            <li><Link to="/issues">Listado Casos</Link></li>
            <li><Link to="/issues/details">Detalle Caso</Link></li>
            <li><Link to="/issues/details">Reasignar Caso</Link></li>
          </ol>
          <ol className="menu--close-sesion">
            <span><Link to="/logout">Cerrar Sesion</Link></span>
          </ol>
        </nav>
      </React.Fragment>
    )
  }
}

export default Menu;