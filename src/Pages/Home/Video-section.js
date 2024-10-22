import React, { useState } from "react";
import { Modal, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTimes, FaPlay } from "react-icons/fa";

const CtaSection = () => {
  const [show, setShow] = useState(false);
  const videoSrc = "//www.youtube.com/embed/hoKDrFyQDy0?si=RuXznBc0PywTEmrA";

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <section className="cta-section">
      <Container>
        <Row>
          <div className="cta-item">
            <div className="icon">
              <Button className="cta-play-btn video-btn" onClick={handleShow}>
                <FaPlay />
              </Button>
            </div>

            {/* Modal */}
            <Modal
              show={show}
              onHide={handleClose}
              centered
              scrollable
              className="exampleModal1"
            >
              <Modal.Header>
                <Button variant="dark" onClick={handleClose} aria-label="Close">
                  <FaTimes />
                </Button>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  allowFullScreen
                  width="100%"
                  height="315"
                  src={videoSrc}
                  title="Video"
                />
              </Modal.Body>
            </Modal>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CtaSection;
