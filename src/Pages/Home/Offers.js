import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa6";
import Product1 from "../../Assets/d13.jpg";
import Product2 from "../../Assets/d14.jpg";
import Product3 from "../../Assets/d15.jpg";
import Product4 from "../../Assets/d16.jpg";
import Product5 from "../../Assets/d17.jpg";
import Product6 from "../../Assets/d18.jpg";

// Define the Offer component
const Offer = () => {
  const offer = [
    { img: Product1, title: "Kids Wear", discount: "Min. 40% Off" },
    { img: Product2, title: "Face Packs", discount: "Up to 50% Off" },
    { img: Product3, title: "Women Heels", discount: "Min. 30% Off" },
    { img: Product4, title: "Baby Toys", discount: "Flat 45% Off" },
    { img: Product5, title: "Herbal Products", discount: "Min. 25% Off" },
    { img: Product6, title: "Office Chairs", discount: "Up to 60% Off" },
  ];

  return (
    <section className="offer-section">
      <Container>
        <div className="section-title">
          <h2>Best Offers For You</h2>
        </div>
        <Row>
          {offer.map((offer, index) => (
            <Col sm={6} md={6} lg={2} key={index} className="mb-4">
              <Card className="offer-card">
                <div
                  className="offer-image"
                  style={{ backgroundImage: `url(${offer.img})` }}
                ></div>
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.discount}</Card.Text>
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

// Export the Offer component
export default Offer;
