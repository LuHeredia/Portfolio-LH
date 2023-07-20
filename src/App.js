import React, { useEffect, useLayoutEffect } from 'react';
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import FrontendSkills from "./Skills/skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import ScrollToTopButton from "./scrollTop/scroll";
import Cintas from './Cintas/Cintas'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <FrontendSkills/>
      <Cintas/>
      <div className="card-container">
        <Projects />
      </div>
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
