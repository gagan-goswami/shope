import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaCcVisa,
  FaCcDiscover,
  FaCcPaypal,
  FaCcMastercard,
  FaCcStripe,
  FaCcJcb,
} from "react-icons/fa";
import {
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import "../Styles/FooterStyles.css";

function Footer() {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;
    setProgress(scrollPercent);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <h2>USeful Links</h2>
                <ul className="page-link">
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> About
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Support
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FaAngleRight /> News & Media
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FaAngleRight /> Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <h2>Information</h2>
                <ul className="page-link">
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Delivery Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Order Tracking
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Returns Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FaAngleRight /> FAQ
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FaAngleRight /> The Shop
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <h2>Get In Touch</h2>
                <ul className="service-links">
                  <li>
                    <Link to="/">
                      <FaMapMarkerAlt /> 123 Street, New York, USA
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaPhoneAlt /> +123 456 7890
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaRegEnvelope /> info@exmple.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <h2>Payment Method</h2>
                <ul className="payment-links">
                  <li>
                    <Link to="/">
                      <FaCcVisa />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaCcDiscover />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaCcPaypal />
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FaCcMastercard />
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FaCcStripe />
                    </Link>
                  </li>

                  <li>
                    <Link to="/">
                      <FaCcJcb />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copy-right">
          <p>Copyright ©2024 All rights reserved</p>
        </div>

        {/* Scroll-to-top button and progress indicator */}
        <div
          className={`progress-wrap ${progress > 0 ? "active-progress" : ""}`}
          onClick={scrollToTop}
        >
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                strokeDasharray: "308",
                strokeDashoffset: `${308 - (progress * 308) / 100}`,
              }}
            />
          </svg>
          <FaArrowUp className="chevron-icon" /> {/* Arrow-up icon here */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
