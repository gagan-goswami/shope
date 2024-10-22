import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FunFact from "./Funfact-section";
import Breadcrumb from "../About/Breadcrumb-section";
import Cta from "../About/Cta-section";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Team from "./Team";

function About() {
  return (
    <div>
      {/* Header-section */}
      <Header />
      {/* breradcrumb-section */}
      <Breadcrumb />
      <section className="about-section">
        <Container>
          <div className="about-content">
            <span>Our Info</span>
            <h2>Our Info About Our Shop</h2>
            <p>
              We are dedicated to delivering top-notch services that exceed
              expectations. Our team focuses on innovation, quality, and
              customer satisfaction. With years of experience, we cater to
              diverse client needs. Integrity and trust are the core values we
              live by. Join us on a journey toward excellence and growth.
            </p>
            <Link to="/">Learn More</Link>
          </div>
        </Container>
      </section>
      {/* funfact-section */}
      <FunFact />
      {/* cta-section */}
      <Cta />
      {/* Team-section */}
      <Team />
      {/* footer-section */}
      <Footer />
    </div>
  );
}

export default About;
