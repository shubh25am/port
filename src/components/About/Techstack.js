import React from "react";
import { Col, Row } from "react-bootstrap";
import {  SiGithub } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiGit,
  
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      
      
      
      
      <Col xs={4} md={2} className="tech-icons">
        < SiGithub/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <BsFillBootstrapFill />
      </Col>
     
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
    </Row>
  );
}

export default Techstack;
