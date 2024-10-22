import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const SubscriptionForm = () => {
  return (
    <section className="subscription-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={6}>
            {/* Icon */}
            <FaEnvelope className="icon-envelope mb-3" />
            {/* Title */}
            <h2 className="fw-bold">Get On The List</h2>
            {/* Subtitle */}
            <p className="subtitle">
              Shop Exclusive Promos & SAVE 20% on Your First Order
            </p>
            {/* Email Form */}
            <Form className="d-flex justify-content-center mt-4">
              <Form.Control
                type="email"
                placeholder="Your email here"
                className="form-input me-2"
              />
              <Button className="btn-subscribe">Subscribe</Button>
            </Form>
            {/* Disclaimer */}
            <p className="mt-3 disclaimer">
              By entering your email, you are accepting our{" "}
              <Link href="#" className="link">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="#" className="link">
                Privacy Policy
              </Link>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscriptionForm;
