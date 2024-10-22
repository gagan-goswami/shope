import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FaShoppingBag, FaShoppingCart, FaRegEye } from "react-icons/fa";

// Import images
import Shop1 from "../../Assets/shop-1.jpg";
import Shop2 from "../../Assets/shop-2.jpg";
import Shop3 from "../../Assets/shop-3.jpg";
import Shop4 from "../../Assets/shop-4.jpg";

const products = [
  {
    id: 1,
    title: "Checkered Casual Shirt",
    price: 975.0,
    discountPrice: 899.99,
    image: Shop1,
  },
  {
    id: 2,
    title: "Solid Color T-Shirt",
    price: 850.0,
    discountPrice: 799.99,
    image: Shop2,
  },
  {
    id: 3,
    title: "Denim Jacket",
    price: 1500.0,
    discountPrice: 1299.99,
    image: Shop3,
  },
  {
    id: 4,
    title: "Slim Fit Jeans",
    price: 1250.0,
    discountPrice: 1100.0,
    image: Shop4,
  },
];

const ShopWithUs = () => {
  return (
    <section className="shop-with-us-section">
      <Container>
        <div className="section-title">
          <h2>Shop With Us</h2>
          <p>Handpicked Favourites just for you</p>
        </div>
        <Row>
          {products.map((product) => (
            <Col key={product.id} lg={3} md={6} sm={6} className="mb-4">
              <Card className="product-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="hover-icons">
                    <Button variant="danger">
                      <FaShoppingCart />
                    </Button>
                    <Button variant="danger">
                      <FaRegEye />
                    </Button>
                    <Button variant="danger">
                      <FaShoppingBag />
                    </Button>
                  </div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <span className="original-price">
                      ${product.price.toFixed(2)}
                    </span>{" "}
                    <span className="discount-price">
                      ${product.discountPrice.toFixed(2)}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ShopWithUs;
