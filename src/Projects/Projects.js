import React from "react";
import "./projects.css";
import pi from "../Imagenes/pi.png";
import pf from "../Imagenes/pf.png";
import logopi from "../Imagenes/logopi.png";
import logopf from "../Imagenes/logopf2.png";

function Projects() {
  return (
    <section id="projects">
      <h1 className="span">Proyectos Realizados</h1>

      {/* <div className='projects'>
        <hr/>
          <h2>Proyecto individual </h2>
          <p >
            Plataforma de videojuegos que te permitirá acceder a toda la
            información que necesitas en un solo lugar. Con esta app, podrás
            explorar fácilmente géneros, plataformas y detalles de cada
            videojuego, incluyendo su respectivo rating.
          </p>
          <h3 >Stack utilizado:</h3>
          <p >
            He desarrollado una aplicación utilizando las mejores tecnologías de
            la industria. Para el Front-end, utilicé React, Redux, HTML y CSS
            para crear una experiencia de usuario atractiva. Además, para el
            Back-end, opté por NodeJS y Express, aprovechando su escalabilidad y
            robustez. Para el almacenamiento de datos, seleccioné PostgrSQL y
            utilicé Sequelize como ORM, garantizando así la eficiencia y
            fiabilidad de la aplicación en todo momento"
          </p>
          <img src={pi} id="image" className="imgPi" />
          <hr/> 
        <hr/>
          <h2>Proyecto Grupal</h2>
          <p>
            Plataforma para trabajadores autónomos
            que les permite ofrecer sus servicios de manera fácil y
            efectiva. Los trabajadores autónomos pueden
            conectarse con una amplia audiencia de clientes y hacer
            crecer su negocio de manera significativa.
          </p>
          <h3>Stack utilizado:</h3>
          <p>
            Este emocionante proyecto fue el resultado de un trabajo en equipo,
            un grupo de siete personas altamente capacitadas. Tuve el honor
            de participar en el diseño de la parte visual de la aplicación. En
            particular, me encargué del desarrollo de la parte front-end,
            trabajando de manera eficaz en CSS y HTML para crear una interfaz
            excepcionalmente hermosa y fácil de usar.
          </p>
          <img src={pf} id="image" className="imgPf" />
        <hr/>
      </div> */}
      <div className="projects">
        <div className="pi">
          <img src={pi} id="image" className="imgPi" />
        </div>
        <div className="detail">
          <img src={logopi} className="logo" />
          <p>
            Plataforma de videojuegos con toda la información en un solo lugar.
            Explora géneros, plataformas y detalles, incluyendo rating.
          </p>
          <h3>Stack utilizado:</h3>
          <p>
            Desarrollé una aplicación con tecnologías líderes de la industria:
            React, Redux, HTML y CSS para el Front-end y NodeJS, Express,
            PostgreSQL y Sequelize para el Back-end. Garantizo escalabilidad,
            robustez, eficiencia y fiabilidad.
          </p>
        </div>
      </div>
      <div className="projectspf">
        <div className="pf">
          <img src={pf} id="image" className="imgPf" />
        </div>
        <div className="detailpf">
          <img src={logopf} className="logopf" />
          <p>
            Plataforma para trabajadores autónomos que ofrece una manera fácil y
            efectiva de ofrecer servicios, conectarse con clientes y hacer
            crecer su negocio.{" "}
          </p>
          <h3>Stack utilizado:</h3>
          <p>
            Emocionante proyecto desarrollado por un equipo altamente capacitado
            de siete personas. Participé en el diseño visual de la aplicación y
            desarrollé el Front-end, trabajando de manera efectiva en CSS y HTML
            para crear una interfaz hermosa y fácil de usar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
