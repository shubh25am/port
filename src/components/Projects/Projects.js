import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gym from "../../Assets/Projects/gym.png";
import Calcu from "../../Assets/Projects/Calcu.png";
import todo from "../../Assets/Projects/todo.png";
import swiggy from "../../Assets/Projects/swiggy.png";
import Common from "../../Assets/Projects/Common.png";
import food from "../../Assets/Projects/food.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="SWIGGY LANDING PAGE"
              description="Designed and developed a Webpage for ordering meals using open-source JavaScript library ReactJs."
              link="https://github.com/shubh25am/Swiggy-Landing-Page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="GYM SITE"
              description="Designed and developed Shubham Fitness Club website to do online registration for joining Fitness Club. By 
providing your basic information like name, gender, age, Email, Contact Number and information is end to end 
encrypted, Using Major Tools: Html, Css, and framework Bootstrap. "
              link="https://github.com/shubh25am/Gym-site-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO LIST"
              description="Designed and developed a handy app TODO List are the lists that we generally use to maintain our day to day tasks 
or list of everything that we have to do, We can add more tasks any time and delete a task which is to be completed. 
Major tools using open-source JavaScript library ReactJs.
"
              link="https://github.com/shubh25am/todoList"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="FOOD SITE"
              description="Designed and developed Food ordering webpage from where you can order fast foods using Major tools: Html, Css, 
and Front-end framework Bootstrap.
"
              link="https://github.com/shubh25am/Food-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Common}
              isBlog={false}
              title="COMMON ROOM"
              description="Designed and developed a Chatting App where we can chat in a common room with multiple users they can enter the 
room by entering their names, Major Tools: Html, Css, Bootstrap, for communication between a user’s used 
Socket.io and for back-end API services used NodeJs. "
              link="https://github.com/shubh25am/Common-Room"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calcu}
              isBlog={false}
              title="CALCULATOR"
              description=" A calculator is a device that performs arithmetic operations on numbers"
              link="https://github.com/shubh25am/Calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
