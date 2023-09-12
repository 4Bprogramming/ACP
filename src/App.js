import logo from "./construccion.gif";
import "./App.css";
import Construccion from "./Components/Construccion/Construccion";
import Home from "./Components/Home/Home";
import NavbarC from "./Components/Navbar/NavbarC";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <NavbarC /> 
      <Home />
      <div className="AppBody" >
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
