import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crowdfundme from "../../Assets/Projects/CrowdFundMe.png";

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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
