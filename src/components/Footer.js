import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Footer.css";
import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6">
          <h2>
            <b style={{ color: "white" }}> Contact Me </b>
          </h2>
          <FaMapMarker />{" "}
          <b style={{ color: "white" }}> Kadiköy, Istanbul, Turkey </b>
          <br />
          <FaPhone /> <b style={{ color: "white" }}> +90 (542) 282-7740 </b>
          <br />
          <FaEnvelope />{" "}
          <a href="mailto:aliihsantas34@gmail.com" className="footer-anchor">
            aliihsantas34@gmail.com
          </a>
        </Col>
        <Col md="6" className="footer-body">
          <h3>Follow Me</h3>
          <ul className="list-unstyled">
            <li>
              <a
                href="https://github.com/ihsan215"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-anchor"
              >
                <FaGithub /> Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ali-ihsan-tas/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-anchor"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://avesis.yildiz.edu.tr/17296"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-anchor"
              >
                <FaGlobe /> Academic Works
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
