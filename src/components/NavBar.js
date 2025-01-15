import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="40"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i className="fas fa-home"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-door-open"></i>Sign in
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user-check"></i>Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;