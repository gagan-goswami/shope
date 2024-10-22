import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Card, Container } from "react-bootstrap";
import Testimonial1 from "../../Assets/testi-1.jpg";
import Testimonial2 from "../../Assets/testi-2.jpg";
import Testimonial3 from "../../Assets/testi-3.jpg";
import Testimonial4 from "../../Assets/testi-4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Josh Dorin",
    profession: "Marketing Consultant",
    review:
      "This company has exceeded my expectations. Their service is top-notch, and I would recommend them to anyone.",
    avatar: Testimonial1,
  },
  {
    id: 2,
    name: "Tom Smith",
    profession: "Entrepreneur",
    review:
      "Exceptional experience! The team was professional and prompt. I'm extremely satisfied with the results.",
    avatar: Testimonial2,
  },
  {
    id: 3,
    name: "Mariya Johnson",
    profession: "Software Engineer",
    review:
      "The quality of service is outstanding. They went above and beyond to meet my needs and delivered on time.",
    avatar: Testimonial3,
  },
  {
    id: 4,
    name: "Emily Davis",
    profession: "Interior Designer",
    review:
      "I’m very impressed with the level of detail and care they put into their work. Highly recommended for everyone.",
    avatar: Testimonial4,
  },
];

const TestimonialSection = () => {
  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 4 },
    },
  };

  return (
    <section className="testimonial-section">
      <Container>
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Hear it from the people who love us</p>
        </div>
        <OwlCarousel className="owl-theme" {...carouselOptions}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="item">
              <Card className="testimonial-card">
                <Card.Body>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <Card.Text>"{testimonial.review}"</Card.Text>
                  <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                  <Card.Subtitle
                    className="text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {testimonial.profession}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;
