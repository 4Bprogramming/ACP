import logo from "./construccion.gif";
import "./App.css";
import Construccion from "./Components/Construccion/Construccion";
import Home from "./Components/Home/Home";
import NavbarC from "./Components/Navbar/NavbarC";

function App() {
  return (
    <div className="App">
      {/* <NavbarC /> */}
      <Home />
      <Construccion />
    </div>
  );
}

export default App;
