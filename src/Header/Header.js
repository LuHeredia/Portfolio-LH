
import React from 'react';
import './header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;