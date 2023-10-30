import React, { useState } from "react";
import "./Testimonials.css";
import comilla from "../../Assets/comilla.png";
import eco from "../../Assets/testimonials/ecocuyum.jpg"
import oliver from "../../Assets/testimonials/oliver.jpg"
import oscar from "../../Assets/testimonials/OscarNiemetz.jpg"
import rustico from "../../Assets/testimonials/rusticos_mendoza.jpg"


function Testimonials() {
  const [Testimonials] = useState([
    {
      src: <img src={oliver} width="80px" height="40px" />,
      title: "Florencia Manzanel, Grupo J B Justo",
      desc: "Tuvimos una excelente experiencia trabajando con la consultora ACP, hicieron un análisis completo de nuestra cafeteria, nos hicieron una propuesta de organización y obtuvimos excelentes resultados con ello. Estamos totalmente satisfechos con su trabajo.",
      active: false,
    },
    {
      src: <img src={rustico} width="80px" height="40px" />,
      title: "Martin Aguero. Rusticos Mendoza",
      desc: "Me ayudaron mucho a re organizar mi empresa desde cero, muy exhaustivo el diagnostico, lo cual me permitió enforcarme en las areas que estaban sin organización y dirección.",
      active: true,
    },
    {
      src: <img src={oscar} width="80px" height="40px" />,
      title: "Oscar Niemetz.  @coachingconoscarniemetz",
      desc: "ACP me acompañó y me acompaña en aspectos específicos de comercialización de servicios, difusión y ampliación de mercados. Han sido particularmente innovadores en procedimientos lo que se ha evidenciado en el crecimiento de ventas en pocos meses.",
      active: false,
    },
    {
      src: <img src={eco} width="80px" height="40px" />,
      title: "Armando Parlanti. Eco Cuyum",
      desc: "Actualmente estamos planificando nuestra desarrollo de imagen corporativa y desarrollo publicitario con ACP y ya estamos implementando la venta online, gracias a la colaboración de la consultora.",
      active: true,
    },
  ]);
  return (
    <section className="Testimonials-experience" id="testimonials">
      <h1 className="TestimonialsTitle">TESTIMONIOS</h1>
      <div className="containerTest">
        {Testimonials.map((Testimonial, i) => (
          <div key={i} className="cardContainerTest">
            <div className="imgSpaceTest">
              <div className="SvgContainerTest">{Testimonial.src}</div>
            </div>
            <p className="TestimonialDesciption">{Testimonial.desc}</p>
            <div className="titleCardTest">{Testimonial.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
