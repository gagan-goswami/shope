// Contact.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Breadcrumb from "../Contact/Breadcrumb-section";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="contact-section">
        <Container>
          <div className="section-title">
            <h2>Contact With Our Support During Emergency!</h2>
          </div>
          <Row className="text-center mb-5">
            <Col md={4}>
              <div className="contact-info">
                <FaMapMarkerAlt />
                <h2 className="mt-2">Office Address:</h2>
                <p>
                  343 ShoppyKart, <br />
                  4148 Honey Street, NY – 62617.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-info">
                <FaPhoneAlt />
                <h2 className="mt-2">Call For Help:</h2>
                <p>
                  <Link to="/">+1(21) 234 557 4567 </Link>
                </p>
                <p>
                  <Link to="/"> +1(21) 234 557 4568 </Link>
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-info">
                <IoIosMail />
                <h2 className="mt-2">Mail Us:</h2>
                <p>
                  <Link to="/">support@mail.com</Link>
                </p>
                <p>
                  <Link to="/"> contact@mail.com</Link>
                </p>
              </div>
            </Col>
          </Row>

          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Your Name*" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your Email*"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="text"
                    placeholder="Enter your Phone Number*"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formSubject">
                  <Form.Control type="text" placeholder="Subject*" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message here*"
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="danger" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Container>
        <div className="mt-5">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.3378290381!2d-0.1277581559501902!3d51.50735122524532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603552e846bf1%3A0xe3b2e3c4f4e15b4a!2sLondon!5e0!3m2!1sen!2suk!4v1697983726937!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
