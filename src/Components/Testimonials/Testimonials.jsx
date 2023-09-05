import React, { useState } from "react";
import './Testimonials.css'
import comilla from '../../Assets/comilla.png'


function Testimonials() {
    const [Testimonials] = useState([
        {
          src: <img src={comilla} width="80px" height="40px"/>,
          title: "Coach Empresarial",
          desc:  "Acá estarán los testimonios",
           active: false,
        },
        {
            src: <img src={comilla} width="80px" height="40px"/>,
          title: "Imagen Corporativa",
          desc:  "Acá estarán los testimonios",
          active: true,
        },
        {
            src: <img src={comilla} width="80px" height="40px"/>,
          title: "Gestión Interna",
          desc:  "Acá estarán los testimonios",
           active: false,
        },
      ]);
  return (
    <section className="Testimonials-experience">
      <h1 className="TestimonialsTitle">Testimonios</h1>
      <div className="containerTest">
        
          {Testimonials.map((Testimonial, i) => (
            <div key={i} className="cardContainerTest">
              <div className="imgSpaceTest">
              <div className="SvgContainerTest">{Testimonial.src}</div>
              </div>
              <p className="TestimonialDesciption" >{Testimonial.desc}</p>
              <div className="titleCardTest">{Testimonial.title}</div>
             
            </div>
          ))}
        </div>
  
    </section>
  )
}

export default Testimonials