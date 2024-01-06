import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali İhsan Taş </span>
            from <span className="purple"> Istanbul, Turkey.</span>
            <br />
            <br />
            I am currently employed as a Res. Asst. at YILDIZ TECHNICAL
            UNIVERSITY (YTU). In this manner, I am positioned to actively engage
            in diverse projects and assume the role of a Software Developer.
            <br />
            <br />
            I finished my bachelor's degree in Mechatronics Engineering at YTU,
            and I'm currently continuing my studies for a master's degree in the
            same field.
            <br />
            <br />
            My focus is on understanding blockchain's fundamental nature and its
            impact on the future. I explore decentralized frameworks,{" "}
            <span className="purple">
              {" "}
              Smart Contracts, DeFi, DAOs, Dapps, and Ethereum protocols.
            </span>{" "}
            To facilitate this intellectual journey, I have diligently
            undertaken technical studies imbued with the principles of Web 3.0.
            This involves a meticulous exploration of{" "}
            <span className="purple">
              {" "}
              Solidity, JavaScript, React.js, Node.js, Next.js, and C++
            </span>
            , with the intent to gain an adept understanding of these languages
            and frameworks. By immersing myself in these technical disciplines,
            I aim to contribute to blockchain-based solutions through a
            comprehensive skill set.
            <br />
            <br />
            My Certificates;
          </p>
          <ul>
            <li className="about-activity">
              <a
                href="https://www.credential.net/2f5dcd88-9239-42b3-9166-04e53fac0785#gs.1t2s00"
                target="_blank"
                rel="noreferrer"
                className="certficaiton-link"
              >
                <ImPointRight /> Blockchain Expert (Show Credential)
              </a>
            </li>
            <li className="about-activity">
              <a
                href="https://www.credential.net/af5e7790-7844-49d1-b774-3389e980bceb#gs.2mrm38"
                target="_blank"
                rel="noreferrer"
                className="certficaiton-link"
              >
                <ImPointRight /> Certified Solidity Developer (Show Credential)
              </a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
