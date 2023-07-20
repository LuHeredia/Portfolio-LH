import React from 'react';
import './header.css';
import logo from '../Imagenes/logonew.png';

function Header() {
  return (
    <div id='header'>
      <nav>
        <div className="logo">
          <img src={logo} style={{ width: '100%' }} alt="Logo" />
        </div>
        <ul className="navBar">
        <li className="navItem"><a href="#home">Inicio</a></li>
          <li className="navItem"><a href="#skills">Skills</a></li>
          <li className="navItem"><a href="#projects">Proyectos</a></li>
          <li className="navItem"><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
