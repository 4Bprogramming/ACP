import React, { useState } from "react";
import "./Testimonials.css";
import comilla from "../../Assets/comilla.png";

function Testimonials() {
  const [Testimonials] = useState([
    {
      src: <img src={comilla} width="80px" height="40px" />,
      title: "Florencia Manzanel, Grupo J B Justo",
      desc: "Tuvimos una excelente experiencia trabajando con la consultora ACP, hicieron un análisis completo de nuestra cafeteria, nos hicieron una propuesta de organización y obtuvimos excelentes resultados con ello. Estamos totalmente satisfechos con su trabajo.",
      active: false,
    },
    {
      src: <img src={comilla} width="80px" height="40px" />,
      title: "Martin Aguero. Rusticos Mendoza",
      desc: "Me ayudaron mucho a re organizar mi empresa desde cero, muy exhaustivo el diagnostico, lo cual me permitió enforcarme en las areas que estaban sin organización y dirección.",
      active: true,
    },
    {
      src: <img src={comilla} width="80px" height="40px" />,
      title: "Oscar Niemetz.  @coachingconoscarniemetz",
      desc: "ACP me acompañó y me acompaña en aspectos específicos de comercialización de servicios, difusión y ampliación de mercados. Han sido particularmente innovadores en procedimientos lo que se ha evidenciado en el crecimiento de ventas en pocos meses.",
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
            <p className="TestimonialDesciption">{Testimonial.desc}</p>
            <div className="titleCardTest">{Testimonial.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
