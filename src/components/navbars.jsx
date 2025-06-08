import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext/authContext";
import { doSignOut } from "../firebase/auth";
import logo from "../images/logoto.png";
import AuthModal from "./authmodal";

const NavBar = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    doSignOut().then(() => navigate("/"));
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
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

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2">
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#payment">Payment</Nav.Link>
              {userLoggedIn && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
              {userLoggedIn ? (
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={showLogin}
        onHide={() => setShowLogin(false)}
        dialogClassName="custom-auth-modal"
        centered
      >
        <AuthModal onClose={() => setShowLogin(false)} />
      </Modal>
    </>
  );
};

export default NavBar;
