import React, { useState } from "react";
import './Services.css'
import mano from '../../Assets/coaching.jpg'
import laptop from '../../Assets/leptop.jpg'
import inge from '../../Assets/inge.jpg'

function Services() {
    const [services] = useState([
        {
          src: <img src={mano} width="300px" height="200px"/>,
          title: "Coach Empresarial",
          desc: "Capacitacion a equipos de trabajo y mandos medios, para lograr la profesionalización.  Aplicación de técnicas de coaching que permiten agilizar los cambios.",
          active: false,
        },
        {
            src:<img src={laptop} width="300px" height="200px"/>,
          title: "Imagen Corporativa",
          desc:  "Creación y desarrollo de imagen corporativa. Diseño y desarrollo web. Marketing digital: Creacion de contenidos para redes sociales. Asesoramiento Publicitario.",
          active: true,
        },
        {
            src: <img src={inge} width="300px" height="200px"/>,
          title: "Gestión Interna",
          desc:  "Auditoria de Gestión interna: Planificación y reorganización de los objetivos de la empresa. Gestión de procedimientos internos, personal, y agenda de clientes.",
          active: false,
        },
      ]);
  return (
    <section className="services-experience" id="services">
      <h1 className="servicesTitle">SERVICIOS</h1>
      <div className="container">
        
          {services.map((service, i) => (
            <div key={i} className="cardContainer">
              <div className="imgSpace">
              <div className="SvgContainer">{service.src}</div>
              </div>
              <div className="titleCard">{service.title}</div>
              <p className="serviceDesciption" >{service.desc}</p>
            </div>
          ))}
        </div>
  
    </section>
  )
}

export default Services