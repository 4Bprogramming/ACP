import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutSection" id="about">
      <br />
      <h1 className="titleAbout">ACERCA DE NOSOTROS</h1>
        <div className="vision">
          <h3>Visión:</h3>
          <p className="textAboutPart" > Ser una consultora reconocida en toda Mendoza, 
          por brindar apoyo y solucionar de manera rápida y efectiva las necesidades de 
          nuestros clientes.
          </p>
        </div>
      <div className="mision">
        <h3>Misión:</h3>
        <p className="textAboutPart">Somos un equipo de profesionales 
          capacitados y con vocación de servicio, dedicados a identificar las necesidades de negocio y marketing de 
          nuestros clientes, al cual acompañamos en el proceso de gestión y desarrollo 
          de herramientas para lograr sus objetivos empresariales.
        </p>
      </div>
      <div className="SpaceBody2">
        
         <h3 >
          
              Valores de la empresa:
            
          </h3>
          {/* <div className="UlForm"> */}
            {/* <div >
              <ul>Responsabilidad</ul>
              <ul>Honestidad</ul>
              <ul>Empatía</ul>
              </div>
              <div>
              <ul>Trabajo en equipo</ul>
              <ul>Colaboración y creatividad</ul>
            <ul>Éxito</ul> */}

            {/* </div> */}
          {/* </div> */}
        <div className="block2">

         <div className="TextSection2">
          <ul>Responsabilidad</ul>
          <ul>Honestidad</ul>
          <ul>Empatía</ul>
         </div>
        
         <div className="textContainer2">
            <ul>Trabajo en equipo</ul>
            <ul>Colaboración y creatividad</ul>
            <ul>Éxito</ul>
         </div>
        </div>
       
      </div>
    </div>
  );
}

export default About;
