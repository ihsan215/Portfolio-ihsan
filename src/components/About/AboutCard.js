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
            My Certificates;
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Blockchain Expert
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain Expert
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain Expert
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
