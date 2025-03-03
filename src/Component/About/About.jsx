import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-header">
        <Container>
          <h1 className="about-title">The Generics</h1>
        </Container>
      </div>
      <Container className="about-section">
        <h1 className="about-heading">About</h1>
        <Row className="about-row">
          {/* Image on the left */}
          <Col md={5} className="text-center">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              className="about-image"
              alt="About"
            />
          </Col>
          {/* Text on the right */}
          <Col md={7} className="about-content">
            <p>
              Lorem ipsum carrots enhanced rebates. Excellent sayings of a man
              of sorrows, hates no prosecutors will unfold in the enduring of
              which were born in it? Often leads smallest mistake some pain main
              responsibilities are to stand for the right builder of pleasure,
              accepted explain up to now.
            </p>
            <p>
              The things we are accusing of these in the explication of the
              truth receives from the flattery of her will never be the trouble
              and they are refused to the pleasures and the pleasures of the
              pain. Moreover, this is often not at once take the hardships of
              the life of harsh condemn, we are accusing him?
            </p>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
