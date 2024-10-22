import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Product1 from "../../Assets/d1.jpg";
import Product2 from "../../Assets/d2.jpg";
import Product3 from "../../Assets/d3.jpg";
import Product4 from "../../Assets/d4.jpg";
import Product5 from "../../Assets/d5.jpg";
import Product6 from "../../Assets/d6.jpg";

const DiscountSection = () => {
  const products = [
    { img: Product1, title: "Formal Wear", discount: "Min. 40% Off" },
    { img: Product2, title: "Active Wear", discount: "Up to 50% Off" },
    { img: Product3, title: "Blazers", discount: "Min. 30% Off" },
    { img: Product4, title: "High Neck", discount: "Flat 45% Off" },
    { img: Product5, title: "Saree", discount: "Min. 25% Off" },
    { img: Product6, title: "Sandles", discount: "Up to 60% Off" },
  ];

  return (
    <section className="discount-section">
      <Container>
        <div className="section-title">
          <h2>Exciting Discounts on Formal Wear</h2>
        </div>

        <Row>
          {products.map((product, index) => (
            <Col sm={6} md={6} lg={2} key={index} className="mb-4">
              <Card className="product-card">
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.img})` }}
                ></div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.discount}</Card.Text>
                  <Link to="/">
                    Shop Now <FaArrowRight />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DiscountSection;
