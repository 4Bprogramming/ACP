import logo from "./construccion.gif";
import "./App.css";
import Construccion from "./Components/Construccion/Construccion";
import Home from "./Components/Home/Home";
//import NavbarC from "./Components/Navbar/NavbarC";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar2 from "./Components/Navbar/Navbar2";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar2 /> 
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
