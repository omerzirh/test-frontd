import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../styles/content.css";
import landingImage from "../../assets/img.svg";
function Contents() {
  return (
    <Container>
      <div className="">
        <Row>
          <Col sm={12} md={4} className="leftCol">
            <div className="landingLeft">
              <div className="landingElement">
                <h1 className="display1 landingHeader">
                  Opening <span style={{ color: "#22a7f0" }}>Secure</span> Cloud
                  Storage for all
                </h1>
              </div>
              <div className="landingElement">
                <h4 className="landingInfo" style={{ color: "grey" }}>
                  Enjoy and profit from
                  <span style={{ color: "#22a7f0" }}> centralized cloud </span>
                  storage that scales at the speed of the future
                </h4>
              </div>
              <div className="landingElement">
                <InputGroup className="inputGroupContent"
                
                >
                  <FormControl
                    placeholder="Enter your email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    style={{
                    borderRadius: "12px",
                      border: 0,
                      height: "100%",
                      fontStyle: "italic",
                    }}
                  ></FormControl>
                  <Button
                    style={{
                      margin: "10px",
                      height: "75%",
                      borderRadius: "7px",
                      width: "30%",
                      backgroundColor: "#22a7f0",
                      fontWeight: "bold",
                    }}
                  >
                    Subscribe
                  </Button>
                </InputGroup>
                <p
                  style={{ color: "gray", fontSize: "15pt", marginTop: "1rem" }}
                >
                  The first 50gb is free.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={8} className="rightElement">
            <div>
              <img
                src={landingImage}
                style={{ marginTop: "12rem", width: "100%", height: "auto" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Contents;
