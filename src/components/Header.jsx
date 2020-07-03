import React from 'react';
import '../assets/styles/components/Header.scss'

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header--main">
            <i className="icon">{'\u2630'}</i>
          </div>

          <div className="Header--user">
            <a href="/" className="item icon">Mensaje</a>
            <a href="/" className="item icon">Notificaciones</a>
            <a href="/" className="item icon">Tareas</a>
            <a href="/" className="item pic">Imagen</a>
            <a href="/" className="item pic">Nombre</a>
            <a href="/" className="item icon">Config</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header;