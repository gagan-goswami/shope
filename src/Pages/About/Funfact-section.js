import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Bootstrap components
import { FaSmile, FaProjectDiagram, FaHeadset, FaUsers } from "react-icons/fa"; // Icons
import CountUp from "react-countup"; // Counter animation

const FunFact = () => {
  const facts = [
    {
      icon: <FaSmile size={50} className="text-primary" />,
      title: "Happy Clients",
      count: 150,
      suffix: "+", // Add suffix for the number
    },
    {
      icon: <FaProjectDiagram size={50} className="text-success" />,
      title: "Projects",
      count: 120,
      suffix: "+", // Add suffix
    },
    {
      icon: <FaHeadset size={50} className="text-warning" />,
      title: "Hours of Support",
      count: 2500,
      suffix: "h", // 'h' as hour suffix
    },
    {
      icon: <FaUsers size={50} className="text-danger" />,
      title: "Hard Workers",
      count: 50,
      suffix: "+", // Add suffix
    },
  ];

  return (
    <section className="funfact-section">
      <Container>
        <Row>
          {facts.map((fact, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="shadow-sm border-0 p-3 bg-light">
                <div className="mb-2">{fact.icon}</div>
                <h2 className="lead">
                  <CountUp
                    end={fact.count}
                    duration={2}
                    separator=","
                    suffix={fact.suffix} // Use suffix prop
                  />
                </h2>
                <p>{fact.title}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFact;
