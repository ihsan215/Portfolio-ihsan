import React from "react";

import "../Footer.css";

import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

function Footer2() {
  return (
    <React.Fragment>
      <div className="footer-area">
        <div className="footer-row">
          <div className="footer-col">
            <h3>Contact Me</h3>
            <p>
              <FaMapMarker /> Kadiköy, Istanbul, Turkey
              <br />
              <FaPhone /> +90 (542) 282-7740
              <br />
              <FaEnvelope />{" "}
              <a
                href="mailto:aliihsantas34@gmail.com"
                className="footer-anchor"
              >
                aliihsantas34@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-col">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer2;
