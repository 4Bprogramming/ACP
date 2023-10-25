import React from "react";
import "./Home.css";
import logo from "../../Assets/presentar.png";
import pict from "../../Assets/program.jpeg";
import pict1 from "../../Assets/reuniones.jpg";
import line from "../../Assets/line.png";

function Home() {
  return (
    <div>
      <div className="AboutBody">
        <div className="AboutContainer">
          <div className="StyledHeading">C O N S U L T O R A</div>
          <img className="fotoo" src={line} alt="linea" />
          <div className="TextSection">
            <img className="Photo2" src={logo} width="400px" />
           
          </div>
        </div>
        {/* <div className="position">
              <button className="btninfo">Más info aquí</button>
            </div> */}
        {/* <div className="AboutContainer">
          <img className="Photo" src={pict1} />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
