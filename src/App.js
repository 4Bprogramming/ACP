import logo from "./construccion.gif";
import "./App.css";
import Construccion from "./Components/Construccion/Construccion";
import Home from "./Components/Home/Home";
import NavbarC from "./Components/Navbar/NavbarC";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import NavBarV2 from "./Components/Navbar/NavBarV2";


function App() {
  return (
    <div className="App">
      {/* <NavbarC />  */}
      <NavBarV2/>
      <Home />
      <div className="AppBody" >
        <About />
        <Services />
        <Testimonials />
        <Contact />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
