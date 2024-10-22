// src/Components/FAQSection.js
import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Breadcrumb from "../Faq/Breadcrumb-section";

const FAQSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleFAQ = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle between open/close
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, UPI, PayPal, and net banking.",
    },
    {
      question: "What is the return policy?",
      answer:
        "You can return any item within 30 days of delivery. Please ensure the item is unused and in its original packaging.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you an email with the tracking number and a link to track your package.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to selected countries. Shipping charges may apply based on the destination.",
    },
    {
      question: "How do I cancel or modify my order?",
      answer:
        "You can modify or cancel your order within 24 hours of placing it. Please contact our support team for assistance.",
    },
    {
      question: "What should I do if I receive a damaged product?",
      answer:
        "If you receive a damaged or defective product, contact our customer support within 48 hours for a replacement or refund.",
    },
  ];

  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="faq-section ">
        <Container>
          <div className="section-title text-center mb-4">
            <h2>Frequently Asked Questions</h2>
            <p>
              Your questions answered! Find quick solutions to common queries.
            </p>
          </div>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Accordion>
                {faqs.map((faq, index) => (
                  <Card key={index} className="mb-3">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                      <h2 className="mb-0">{faq.question}</h2>
                      <Button
                        variant="link"
                        onClick={() => toggleFAQ(index)}
                        aria-controls={`faq-${index}`}
                        aria-expanded={activeKey === index}
                      >
                        {activeKey === index ? <FaMinus /> : <FaPlus />}
                      </Button>
                    </Card.Header>

                    <Accordion.Collapse
                      eventKey={index.toString()}
                      in={activeKey === index}
                    >
                      <Card.Body>{faq.answer}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FAQSection;
