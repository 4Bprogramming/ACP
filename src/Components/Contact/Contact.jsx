import React from 'react'
import './Contact.css'
import Whatsapp from '../../Assets/WhatsApp.svg.webp'
import Instagram  from '../../Assets/instagram.png'

function Contact() {
  return (
    <div className="AboutContact">

    <div >
      <h1 className="StyledHeadingContact">CONTACTO</h1>

      <div className="TextSectionContact">
        <p>Transformamos los datos en información
para la toma de decisiones, contactate al</p>

        <p><img src={Whatsapp} width="50px" alt="Whatsapp" /></p>

        <p style={{ fontWeight:"600" }}>CEL <span style={{ fontWeight:"200", marginLeft: "10px" }}>2616075153 //2613051523</span>   </p>

        <p style={{ fontWeight:"600" }}>EMAIL<span style={{ fontWeight:"200", marginLeft: "10px" }}>hola@gmail.com</span> </p>


        <p style={{ fontWeight:"600" }}>SOCIAL <a href='#' target='blank'> <img src={Instagram} style={{marginTop:"10px"}}width="30px" alt='Instagram' />    </a>    </p>

      </div>

    </div>

    <div className="photoContact">
      
    </div>

  </div>
  )
}

export default Contact