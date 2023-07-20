import React from "react";
import pi from "../Imagenes/pi.png";
import pf from "../Imagenes/pf.png";
import logopi from "../Imagenes/logopi.png";
import logopf from "../Imagenes/logopf2.png";
import './projects.css';

// function Projects() {
//   return (
//     <section id="projects">
//     <div className="title">
// <hr className="vertical-line"/>
//     <h1 className="h12">Proyectos Realizados</h1>
//     <div className="cards-container">
//       <div className="card">
//         <img src={pi} alt="Placeholder" />
//         <div className="card-body">
//           <h5 className="card-title">Proyecto Individual</h5>
//           <p className="card-text">Plataforma de videojuegos con toda la información en un solo lugar.
//             Explora géneros, plataformas y detalles, incluyendo rating.</p>
//             <h5 className="card-title">Detalle</h5>
//           <p className="card-text">  Desarrollé una aplicación con tecnologías líderes de la industria:
//             React, Redux, HTML y CSS para el Front-end y NodeJS, Express,
//             PostgreSQL y Sequelize para el Back-end. Garantizo escalabilidad,
//             robustez, eficiencia y fiabilidad.</p>
//           {/* <a href="#" className="btn btn-primary">Botón 1</a> */}
//         </div>
//       </div>
//       <div className="card">
//         <img src={pf} alt="Placeholder" />
//         <div className="card-body">
//           <h5 className="card-title">Proyecto Grupal</h5>
//           <p className="card-text"> Plataforma para trabajadores autónomos que ofrece una manera fácil y
//             efectiva de ofrecer servicios, conectarse con clientes y hacer
//             crecer su negocio.</p>
//             <h5 className="card-title">Detalle</h5>
//           <p className="card-text">  Emocionante proyecto desarrollado por un equipo altamente capacitado
//             de siete personas. Participé en el diseño visual de la aplicación y
//             desarrollé el Front-end, trabajando de manera efectiva en CSS y HTML
//             para crear una interfaz hermosa y fácil de usar.</p>
            
//           {/* <a href="#" className="btn btn-primary">Botón 2</a> */}
//         </div>
//       </div>
//     </div>

// </div>
//   </section>


function Projects() {
  return (
    <section id="projects">
    <div>
    <h1 className="h12">    <hr className="hr2"/>
Proyectos Realizados</h1>
      <div className="card">
      <img src={pi} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Proyecto Individual</h3>
        <hr className="hr1"/>
        <p className="card-text">Plataforma de videojuegos con toda la información en un solo lugar.
            Explora géneros, plataformas y detalles, incluyendo rating.</p>
      </div>
    </div>
    <div className="card">
      <img src={pf} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Proyecto Grupal</h3>
        <hr className="hr1"/>
        <p className="card-text">Plataforma para trabajadores autónomos que ofrece una manera fácil y
           efectiva de ofrecer servicios, conectarse con clientes y hacer
            crecer su negocio.</p>
      </div>
    </div>
    </div>
    </section>
  );
}

export default Projects;

//   );
// }

// export default Projects;
