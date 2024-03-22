import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiAwsamplify,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={{ fontSize: "1rem" }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "1rem" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <p style={{ fontSize: "1rem" }}>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "1rem" }}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{ fontSize: "1rem" }}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "1rem" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "1rem" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "1rem" }}>Mongodb </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "1rem" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "1rem" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify />
        <p style={{ fontSize: "1rem" }}>AWS Amplify</p>
      </Col>
    </Row>
  );
}

export default Techstack;
