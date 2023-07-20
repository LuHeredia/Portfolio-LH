import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div id="contact">
      <hr className='hr3'/>
      <h1 className='h1'>Contacto</h1>
      <section className="contact-section">
      <div className="contact-content">
        <p>¡Contáctame para obtener más información!</p>
        <ul className="contact-info">
          <li>
            <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=luuheredia24@gmail.com'> Mail</a>
          </li>
          <li>
            <a className="linkedin" href='https://www.linkedin.com/in/luciana-heredia-4b8622198/'>LinkedIn</a>
          </li>
          <li>
            <a className="github" href='https://github.com/LuHeredia'>GitHub</a>
          </li>
          <li>
            <a  href='https://www.instagram.com/luheredia05/'>Instagram</a>
          </li>
        
        </ul>
      </div>
    </section>
    
    </div>
  );
}

export default Contact;