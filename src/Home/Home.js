import React from "react";
import "./home.css";
import dalle from "../Imagenes/dalle.png";

function Home() {
  return (
    <div id="home">
      <div className="container">
        <h2>Front End Developer</h2>

        <div className="h1s">
          <div>
            <h1>Luciana</h1>
          </div>
          <div>
            <h1>Heredia</h1>
          </div>
          <img src={dalle} alt="dalle" className="dalle" />
        </div>
        <div className="fp">
          <section className="parrafo">
            <p>
              "Transformando ideas en interfaces atractivas y funcionales."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
