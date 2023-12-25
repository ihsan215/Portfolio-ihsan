import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crowdfundme from "../../Assets/Projects/CrowdFundMe.png";
import blockchainDemo from "../../Assets/Projects/blockchainDemo.png";
import js from "../../Assets/Projects/js.png";
import sol from "../../Assets/Projects/sol.png";
import react from "../../Assets/Projects/react.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdfundme}
              isBlog={false}
              title="CrowdFundMe"
              description="Welcome to CrowdFundMe, a decentralized crowdfunding application built on the Ethereum blockchain. CrowdFundMe aims to provide a secure, transparent, and trustless platform for creators and backers to connect and collaborate on innovative projects"
              ghLink="https://github.com/ihsan215/Crowd-Fund-Me"
              demoLink="https://crowdfundme-client.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchainDemo}
              isBlog={false}
              title="Blockchain Demo - C++"
              description="This application essentially consists of;
              A blockchain network containing index, timestamps, data, prev.hash and hash values has been created. Users are able to mine new blocks containing the desired information. Lastly, a text file can be created from the blockchain."
              ghLink="https://github.com/ihsan215/Blockchain-Demo-CPP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sol}
              isBlog={false}
              title="Smart Contract Projects"
              description="In this application series, there are various Smart Contract projects for the ethereum network using the Solidity programming language"
              ghLink="https://github.com/ihsan215/Smart-Contract-Projects"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={js}
              isBlog={false}
              title="Vanilla Js - Tutorial Projects"
              description="The purpose of this project series is to present JS projects for the beginner level. Correspondingly, fundamental knowledge of HTML and CSS is required."
              ghLink="https://github.com/ihsan215/JavaScript-Projects"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React.js - Tutorial Projects"
              description="This project series  is a curated collection of hands-on projects focused on leveraging the React JavaScript library. These projects serve as a structured learning path, starting from foundational concepts like components and state management and progressing towards more advanced topics such as API integration, state handling with Redux, authentication, and deployment strategies. Each project incrementally builds upon the last, providing a comprehensive understanding of React development while honing skills in creating interactive and scalable web applications."
              ghLink="https://github.com/ihsan215/JavaScript-Projects"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
