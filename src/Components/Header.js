import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Modal,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import "../Styles/HeaderStyles.css";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showModal1, setShowModal1] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleScroll = () => {
    const stickyClass = "is-sticky-menu";
    const scrollTop = window.scrollY;
    const stickyElement = document.querySelector(".is-sticky-on");

    if (scrollTop >= 250) {
      stickyElement.classList.add(stickyClass);
    } else {
      stickyElement.classList.remove(stickyClass);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle dropdown hover
  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Modal 1 Handlers
  const handleShowModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => setShowModal1(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    handleCloseModal1();
  };

  return (
    <header className="header-section">
      <div className="menu-bar is-sticky-on">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">Shopy</Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleShowOffcanvas}
              className="ms-auto"
            >
              <FaBars />
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-menu">
                <Nav className="m-auto p-0">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" className="active">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/About">
                      About
                    </Nav.Link>
                  </Nav.Item>

                  {/* First Dropdown */}
                  <Nav.Item
                    className={`dropdown ${
                      activeDropdown === "projects" ? "show" : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("projects")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Nav.Link href="#">
                      Pages <FaChevronDown />
                    </Nav.Link>
                    <div
                      className={`dropdown-menu ${
                        activeDropdown === "projects" ? "show" : ""
                      }`}
                    >
                      <Nav.Link
                        as={Link}
                        to="/Product"
                        className="dropdown-item"
                      >
                        Product
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="/Checkout"
                        className="dropdown-item"
                      >
                        Cart
                      </Nav.Link>
                      <Nav.Link as={Link} to="/Faqs" className="dropdown-item">
                        FAQs
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Contact">
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <button onClick={handleShowModal1} className="btn-search">
              <FaSearch />
            </button>

            <Modal
              show={showModal1}
              onHide={handleCloseModal1}
              centered
              aria-labelledby="modal1Label"
            >
              <Modal.Header closeButton className="modal-header">
                <Modal.Title id="modal1Label">Search Here</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSearch} className="search-form">
                  <InputGroup className="input-group">
                    <Form.Control
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="form-control"
                    />
                    <Button type="submit" className="btn">
                      Search
                    </Button>
                  </InputGroup>
                </Form>
              </Modal.Body>
            </Modal>

            <button className="contact-btn">
              <FaUser /> Login
            </button>
            <button className="contact-btn">
              <FaShoppingCart /> Cart
            </button>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
