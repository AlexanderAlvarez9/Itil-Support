import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Menu.scss';
import { useUser } from 'reactfire'

const Menu = () => {

  const user = useUser();

  const handlelogout = async () => {
    await firebase.auth().signOut();
  }

  return (
    <React.Fragment>
      <nav className="menu">
        <ol className="menu--name">
          <Link to="/Itil-Support/">Suppourtil</Link>
        </ol>

        {!user &&
          <ol className="menu--items">
            <li><Link to="/login">Inicia Sesion</Link></li>
          </ol>
        }
        {user &&
          <ol className="menu--items">
            <li><Link to="/login">Sesion</Link></li>
            <li><Link to="/new-user">Usuarios</Link></li>
            <li><Link to="/new-service">Servicios</Link></li>
            <li><Link to="/new-issue">Crear Evento</Link></li>
            <li><Link to="/issues">Listado Casos</Link></li>
            <li><Link to="/issues-details">Detalle Caso</Link></li>
          </ol>
        }
        {
          user &&
          <ol className="menu--close-sesion">
            <span><li onClick={handlelogout}>Cerrar Sesion</li></span>
          </ol>
        }
      </nav>
    </React.Fragment>
  )
}

export default Menu;