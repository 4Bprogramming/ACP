import React from "react";
import "./Home.css";
import logo from "../../Assets/logo.png";
import pict from "../../Assets/program.jpeg";
import line from "../../Assets/line.png";

function Home() {
  return (
    <div>
      <div className="AboutBody">
        <div className="AboutContainer">
          <div className="StyledHeading">C O N S U L T O R A</div>
          <img className="fotoo" src={line} alt="linea" />
          <div className="TextSection">
            <img className="Photo2" src={logo} />
            <div className="position">
              <button className="btninfo">Más info aquí</button>
            </div>
          </div>
        </div>
        <div className="AboutContainer">
          <img className="Photo" src={pict} />
        </div>
      </div>
    </div>
  );
}

export default Home;