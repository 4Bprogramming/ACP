import React from "react";
import "./Contact.css";
import Whatsapp from "../../Assets/WhatsApp.svg.webp";
import Instagram from "../../Assets/instagram.png";

function Contact() {
  return (
    <div className="AboutContact" id="contact">
      <div>
        <h1 className="StyledHeadingContact">CONTACTO</h1>

        <div className="TextSectionContact">
          {/* <p>
            Transformamos los datos en información para la toma de decisiones,
            contactate al
          </p> */}

          <p>
            
          </p>

          <p style={{ fontWeight: "600" }}>
            CEL{" "}
            <span style={{ fontWeight: "200", marginLeft: "10px" }}>
              2616075153 // 2613051523
            </span>{" "}
          </p>

          <p style={{ fontWeight: "600" }}>
            EMAIL
            <a href='mailto:acpgestionymarketing@gmail.com'> ACPmail </a>
            {/* <span style={{ fontWeight: "200", marginLeft: "10px" }}>
              acpgestionymarketing@gmail.com
            </span>{" "} */}
          </p>

          <p style={{ fontWeight: "600",textAlign:"center"}}>
          <a
              href="https://api.whatsapp.com/send?phone=5492616075153"
              target="blank"
            >
              <img src={Whatsapp} width="50px" alt="Whatsapp" style={{marginRight:"20px"}} />
            </a>
            <a
              href="https://www.instagram.com/acp.gestion.marketing/?igshid=MzRlODBiNWFlZA=="
              target="blank"
            >
              {" "}
              <img
                src={Instagram}
                style={{ marginTop: "2px"}}
                width="50px"
                alt="Instagram"
              />{" "}
            </a>{" "}
          </p>
        </div>
      </div>

      {/* <div className="photoContact"></div> */}
    </div>
  );
}

export default Contact;
