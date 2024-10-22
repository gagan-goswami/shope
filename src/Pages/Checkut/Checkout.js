import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import Shop1 from "../../Assets/shop-1.jpg";
import Shop2 from "../../Assets/shop-2.jpg";
import Shop3 from "../../Assets/shop-3.jpg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Breadcrumb from "../Checkut/Breadcrumb-section";

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Checkered Casual Shirt",
      price: 899,
      quantity: 1,
      image: Shop1,
    },
    {
      id: 2,
      name: "Cotton Flared Kurta",
      price: 599,
      quantity: 1,
      image: Shop2,
    },
    {
      id: 3,
      name: "Men Casual Shirt",
      price: 799,
      quantity: 1,
      image: Shop3,
    },
  ]);

  const serviceCharge = 10;

  const handleQuantityChange = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalAmount = () => {
    return (
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0) +
      serviceCharge
    );
  };

  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="cart-table">
        <Container>
          <div className="section-title">
            <h2>Shopping Cart</h2>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </Button>{" "}
                    {item.quantity}{" "}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </Button>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row>
            <Col lg={6} className="mb-4">
              <h2>Billing Details</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter mobile number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLandmark">
                  <Form.Label>Landmark</Form.Label>
                  <Form.Control type="text" placeholder="Enter landmark" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Label>Town/City</Form.Label>
                  <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formOffice">
                  <Form.Label>Office</Form.Label>
                  <Form.Select>
                    <option>Select Office</option>
                    <option>Home</option>
                    <option>Work</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="dark" className="w-100 mt-3 mb-3">
                  Delivery To This Address
                </Button>
              </Form>
            </Col>

            <Col lg={6}>
              <h2>Order Summary</h2>
              <p>Service Charge: ${serviceCharge}</p>
              <p>Total: ${getTotalAmount()}</p>
              <Button variant="success" size="lg">
                Make A Payment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
