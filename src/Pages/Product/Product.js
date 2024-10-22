import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import productImg1 from "../../Assets/cart1.jpg";
import productImg2 from "../../Assets/cart2.jpg";
import productImg3 from "../../Assets/cart3.jpg";
import productImg4 from "../../Assets/cart4.jpg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Breadcrumb from "./Breadcrumb-section";
import Offer from "../Home/Offers";
import DiscountSection from "../Home/Deals-section";

// Sample product data
const productImages = [productImg1, productImg2, productImg3, productImg4];

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(productImg1);
  const [pincode, setPincode] = useState("");
  const [showLens, setShowLens] = useState(false); // Control zoom lens visibility
  const zoomRef = useRef(null);
  const imgContainerRef = useRef(null);

  const handlePincodeChange = (e) => setPincode(e.target.value);

  const handleCheckPincode = () => {
    if (pincode) {
      alert(`Checking availability for pincode: ${pincode}`);
    } else {
      alert("Please enter a valid pincode.");
    }
  };

  const handleMouseMove = (e) => {
    const zoomLens = zoomRef.current;
    const container = imgContainerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left - zoomLens.offsetWidth / 2;
    const y = e.clientY - top - zoomLens.offsetHeight / 2;

    const lensX = Math.max(0, Math.min(x, width - zoomLens.offsetWidth));
    const lensY = Math.max(0, Math.min(y, height - zoomLens.offsetHeight));

    zoomLens.style.left = `${lensX}px`;
    zoomLens.style.top = `${lensY}px`;
    zoomLens.style.backgroundPosition = `-${lensX * 2}px -${lensY * 2}px`;
  };

  return (
    <div>
      <Header />
      <Breadcrumb />
      <section className="product-section">
        <Container className="overflow-hidden">
          <Row>
            <Col md={6} style={{ position: "relative" }}>
              <div
                ref={imgContainerRef}
                className="image-container"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowLens(true)} // Show lens on hover
                onMouseLeave={() => setShowLens(false)} // Hide lens when not hovering
                style={{
                  position: "relative",
                  width: "100%",
                  height: "600px",
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  ref={zoomRef}
                  className="zoom-lens"
                  style={{
                    display: showLens ? "block" : "none", // Conditionally show lens
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    border: "1px solid grey",
                    backgroundImage: `url(${selectedImage})`,
                    backgroundSize: "1200px 1200px", // Zoom effect by doubling size
                    pointerEvents: "none",
                  }}
                ></div>
              </div>

              <div className="thumbnail-gallery d-flex justify-content-center mt-3 mb-5">
                {productImages.map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Thumbnail for ${img}`}
                    className={`thumbnail-img mx-2 ${
                      selectedImage === img ? "active-thumbnail" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      cursor: "pointer",
                      opacity: selectedImage === img ? 1 : 0.6,
                      border: selectedImage === img ? "2px solid #000" : "none",
                    }}
                  />
                ))}
              </div>
            </Col>

            <Col md={6}>
              <h2>Men's Checkered Shirt</h2>
              <p className="text-muted">
                Special Price: Get extra 5% off (price inclusive of discount)
              </p>
              <ul>
                <li>
                  Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit
                  Card
                </li>
                <li>Bank Offer: 5% Cashback on HDFC Bank Debit Cards</li>
                <li>
                  Bank Offer: Extra 5% off with Axis Bank Buzz Credit Card
                </li>
              </ul>

              <h2>Description:</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, ratione et ipsum velit explicabo deleniti obcaecati
                numquam, quisquam quas quae accusamus eveniet magni.
              </p>

              <h2>Highlights:</h2>
              <ul>
                <li>Neck: Collar Neck</li>
                <li>Fit: Slim</li>
                <li>Sleeve: Full Sleeve</li>
                <li>Material: Pure Cotton</li>
              </ul>

              <h2>Services:</h2>
              <ul>
                <li>30 Day Return Policy</li>
                <li>Cash On Delivery Available</li>
              </ul>

              <InputGroup className="mb-4">
                <FormControl
                  className="border border-danger"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={handlePincodeChange}
                />
                <Button variant="danger" onClick={handleCheckPincode}>
                  Check
                </Button>
              </InputGroup>

              <div className="d-flex">
                <Button variant="dark" className="me-2">
                  Add to Cart
                </Button>
                <Button variant="danger">Buy Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <DiscountSection />
      <Offer />
      <Footer />
    </div>
  );
};

export default ProductPage;
