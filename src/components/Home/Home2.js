import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ihsan.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn, FaBook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Ali İhsan Taş, and I'm Driven to Shape the Future with
              Blockchain-Powered Innovation!
              <br />
              <br />
              My programming journey has been an ongoing exploration, and I've
              honed my expertise in fundamental languages,{" "}
              <b className="purple"> C++, Javascript, and Solidity. </b>,
              continually seeking to deepen my knowledge base. However, my
              passion truly ignites within the realm of blockchain technology.
              <br />
              <br />
              I'm fervently devoted to pioneering groundbreaking{" "}
              <b className="purple"> blockchain-based applications. </b> I've
              delved into Solidity, the language behind smart contract
              development, and navigated the intricate world of Smart Contracts,
              leveraging libraries like ethers and tools such as Hardhat and
              Ganache to craft robust decentralized solutions. My enthusiasm
              extends to innovative projects, where I've enthusiastically
              applied my skills in creating transformative{" "}
              <b className="purple"> blockchain-powered applications. </b>
              <br />
              <br />
              When developing products, I harness the power of{" "}
              <b className="purple">
                {" "}
                modern JavaScript libraries and frameworks like React.js and
                Next.js.{" "}
              </b>
              However, my heart lies in blockchain-driven innovation, and I'm
              committed to pushing the boundaries of what's possible in this
              transformative landscape. <br />
              <br />
              Furthermore, I have authored a total of{" "}
              <b className="purple"> seven academic publications </b>, among
              which <b className="purple">two are featured in SCI journals. </b>
              These publications are centered around the development and
              practical application of algorithms in engineering
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ihsan215"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ali-ihsan-tas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@aliihsantas34"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://avesis.yildiz.edu.tr/17296/yayinlar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaBook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
