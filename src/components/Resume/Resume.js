import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/1911981363 Shubham resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  /*const [spojRank, upadteSpojRank] = useState(0); */
  /*const [hackerrank, upadteHackerank] = useState(0); */
  /*const [sem, upadateSem] = useState(0);*/
  /*const [cgpa, upadteCgpa] = useState(0); */

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        /*upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem); */
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
          
           
            
          <h1 className="resume-title">Education</h1> 
          
          <h4 className="resume-title">College education</h4>
          
          <Resumecontent
              title="CHITKARA UNIVERSITY"
              

              date="2019 - 2023"
              content={["Currently persuing my B.tech with chitkara university."                ,"Current CGPA: 9.04.",
              "Location: Baddi, Himachal Pradesh.",
              ]}
            />
            <h4 className="resume-title">School education</h4>
            
            <Resumecontent
              title="INDUS PUBLIC SCHOOL"
              

              date="2017 - 2019"
              content={["I completed my 12th Standard in CBSE.","Marks in percent: 73.40%.",
              "Location: Jind, Haryana.",
              ]}
            />
            <Resumecontent
              title="INDUS PUBLIC SCHOOL"
              

              date="2016 - 2017"
              content={["I completed my 10th Standard in CBSE.","CGPA obtained: 10.",
              "Location:  Jind, Haryana.",
              ]}
            />
             <h1 className="resume-title">CERTIFICATIONS</h1>
          <Resumecontent
              title="ONLINE CERTIFICATES "
              date="2019 - 2024"
              content={[
                "Introduction to cyber security(Cisco).",
                "Cisco Programming Essentials in Python",
                "National Institute of disaster management",
                "HACKER RANK Java Script (Basic)",
               
            ]}
            />
          </Col>

          
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
