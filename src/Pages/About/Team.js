// TeamSection.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Team1 from "../../Assets/team1.jpg";
import Team2 from "../../Assets/team2.jpg";
import Team3 from "../../Assets/team3.jpg";
import Team4 from "../../Assets/team4.jpg";

const teamMembers = [
  {
    name: "Alice Johnson",
    profession: "CEO & Founder",
    image: Team1,
    socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "John Smith",
    profession: "Marketing Head",
    image: Team2,
    socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Emily Brown",
    profession: "Lead Designer",
    image: Team3,
    socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Michael Lee",
    profession: "Software Engineer",
    image: Team4,
    socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  },
];

const TeamSection = () => (
  <Container className="py-5">
    <h2 className="text-center mb-5">Meet Our Team</h2>
    <Row>
      {teamMembers.map((member, index) => (
        <Col key={index} md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center team-card">
            <Card.Img variant="top" src={member.image} alt={member.name} />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {member.profession}
              </Card.Subtitle>
              <div className="d-flex justify-content-center">
                {Object.entries(member.socials).map(([network, url], idx) => (
                  <Button
                    key={idx}
                    variant="link"
                    href={url}
                    target="_blank"
                    className="social-icon mx-2"
                  >
                    {network === "facebook" && <FaFacebook />}
                    {network === "twitter" && <FaTwitter />}
                    {network === "linkedin" && <FaLinkedin />}
                    {network === "instagram" && <FaInstagram />}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default TeamSection;
