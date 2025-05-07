import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; // Import components from react-bootstrap
import logo from "../images/logoto.png"; // Make sure the path to your logo image is correct.

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="SRSR Logo"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              marginLeft: "12px",
            }}
          />
          <strong>SRSRLEMOSAIN</strong>
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
