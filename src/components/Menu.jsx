import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Menu.scss';
import { useUser } from 'reactfire'
import { useFirebaseApp } from 'reactfire';
import logo from '../assets/imgs/logo.png';

const Menu = () => {

  const user = useUser();
  const firebase = useFirebaseApp();

  const handlelogout = async () => {
    await firebase.auth().signOut();
  }

  return (
    <React.Fragment>
      <nav className="menu">
        <ol className="menu--name">
          <img className="menu--name__logo" src={logo} alt="" />
          <Link to="/">Suppourtil</Link>
        </ol>

        {!user &&
          <ol className="menu--items">
            <li><Link to="/login">Inicia Sesion</Link></li>
          </ol>
        }
        {user &&
          <ol className="menu--items">
            <li><Link to="/users">Usuarios</Link></li>
            <li><Link to="/technicians">Tecnicos</Link></li>
            <li><Link to="/new-service">Servicios</Link></li>
            <li><Link to="/new-issue">Crear Evento</Link></li>
            <li><Link to="/events">Listado Casos</Link></li>
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