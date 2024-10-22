import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const PromoBanner = () => {
  return (
    <div className="promo-banner d-flex align-items-center">
      <Container>
        <Row>
          <Col md={12}>
            <div className="promo-content">
              <span className="offer-badge">OUR SPECIAL OFFER</span>
              <h2>Up To 60% Off Now</h2>
              <p>Enjoy The Season Sale</p>
            </div>
            <Button variant="light" className="cta-button">
              Contact Us <span className="arrow">→</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoBanner;
