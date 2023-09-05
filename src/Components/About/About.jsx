import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutSection">
      <br />
      <h1 className="titleAbout">ACERCA DE NOSOTROS</h1>
      <div>
        <h3>Visión:</h3>
        <p className="textAboutPart" > Ser una consultora reconocida en toda Mendoza, 
        por brindar apoyo y solucionar de manera rápida y efectiva las necesidades de 
        nuestros clientes.
</p>
      </div>
      <div>
        <h3>Misión:</h3>
        <p className="textAboutPart">Somos un equipo de profesionales especializados y 
        capacitados, dedicados a identificar las necesidades de negocio y marketing de 
        nuestros clientes, al cual acompañamos en el proceso de gestión, en el desarrollo 
        de herramientas para lograr sus objetivos empresariales.
</p>
      </div>
      <div>
        <h3>Valores de la empresa:</h3>
       
        <ul>Responsabilidad</ul>
        <ul>Respeto</ul>
        <ul>Honestidad</ul>
        <ul>Empatía</ul>
        <ul>Trabajo en equipo</ul>
        <ul>Colaboración y creatividad</ul>
        <ul>Pasión</ul>
        <ul>Éxito</ul>
      </div>
    </div>
  );
}

export default About;
