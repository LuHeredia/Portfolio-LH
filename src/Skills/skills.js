import React from "react";
import "./skills.css";

function FrontendSkills() {
  return (
    <div id="skills">
      <div>
        <h1 className="h12">
          <hr className="hr2" />
          Skills
        </h1>
        <div className="skills-container">
          <div className="skill">
            <div className="skill-content">
              <span className="material-icons">lightbulb_outline</span>
              <h3 className="skill-title">Grandes Ideas</h3>
              <p className="skill-text">
                Poseo una mente creativa para crear interfaces web originales.
                Explorando nuevas ideas constantemente, ofrezco experiencias
                visuales que capturan la atención de los usuarios.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-content">
              <span className="material-icons">groups</span>
              <h3 className="skill-title">Colaboracion</h3>
              <p className="skill-text">
                Disfruto trabajar en equipo para alcanzar nuestras metas y
                llevar a cabo nuevos proyectos. Mi habilidad para
                comunicarme de manera efectiva contribuye a fomentar un ambiente
                laboral positivo y colaborativo.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="skill-content">
              <span className="material-icons">handyman</span>{" "}
              <h3 className="skill-title">Soluciones</h3>
              <p className="skill-text">
                Soy hábil en la solución de problemas que enfrento. Me gusta
                informarme antes de tomar una decision y aplico soluciones
                eficientes que mejoran la calidad del producto final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontendSkills;
