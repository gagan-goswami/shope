import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Shipping1 from "../../Assets/banner5.jpg";
import Shipping2 from "../../Assets/banner4.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Shipping() {
  return (
    <section className="shipping-section">
      <Container>
        <div className="section-title">
          <h2>Free Shipping For You Till Midnight</h2>
        </div>
        <Row>
          {/* Column 1 */}
          <Col xs={12} md={6}>
            <div
              className="shipping-item"
              style={{
                backgroundImage: `url(${Shipping1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="shipping-content">
                <h2>Standard Shipping</h2>
                <p>Delivery within 5-7 business days.</p>
                <Link to="/">
                  Shop Now <FaArrowRight />
                </Link>
              </div>
            </div>
          </Col>

          {/* Column 2 */}
          <Col xs={12} md={6}>
            <div
              className="shipping-item"
              style={{
                backgroundImage: `url(${Shipping2})`,
                backgroundSize: "cover",
              }}
            >
              <div className="shipping-content">
                <h2>Express Shipping</h2>
                <p>Delivery within 2-3 business days.</p>
                <Link to="/">
                  Shop Now <FaArrowRight />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Shipping;
