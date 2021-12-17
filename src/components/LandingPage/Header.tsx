import React from "react";
import { ReactComponent as background } from "../assets/background.svg";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "../styles/header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        backgroundImage: "url(../assets/background.svg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link className="link" href="#About">
                About
              </Nav.Link>
              <Nav.Link className="link" href="#Service">
                Service
              </Nav.Link>
              <Nav.Link className="link" href="#Features">
                Features
              </Nav.Link>
              <Nav.Link className="link" href="#Pricing">
                Pricing
              </Nav.Link>
              <Button
              id="getStartedButton"
                className="buttonGetStarted"
                style={{
                  backgroundColor: "#22a7f0",
                  color: "white",
                  fontWeight: "bold",
                  border: "10px",
                }}
              >
                <Nav.Link
                  className="linkGetStarted"
                  style={{ color: "white" }}
                  href="/dashboard"
                >
                  Get Started
                </Nav.Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
