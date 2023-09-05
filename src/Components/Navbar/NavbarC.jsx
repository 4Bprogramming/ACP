import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../Assets/logo_png.png'
import { HashLink } from "react-router-hash-link";
import './Navbar.css'

function NavbarC() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === "skills"
                ? "active navbar-link"
                : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("skills")}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#project"
            className={
              activeLink === "project"
                ? "active navbar-link"
                : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("project")}
          >
            Projects
          </Nav.Link>
        </Nav>
        <span >
          <HashLink to="#connect">
            <button className="button-contact">
              <span>Contáctanos</span>
            </button>
          </HashLink>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavbarC