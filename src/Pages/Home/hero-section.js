import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Styles/HomeStyles.css";
import slider1 from "../../Assets/banner1.jpg";
import slider2 from "../../Assets/banner2.jpg";
import slider3 from "../../Assets/banner3.jpg";
import slider4 from "../../Assets/banner4.jpg";

const options = {
  className: "owl-theme",
  autoplay: false,
  loop: true,
  slideBy: 1,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  dots: true,
  nav: true,
  navText: [
    "<div class='custom-prev-arrow'>&#9664;</div>",
    "<div class='custom-next-arrow'>&#9654;</div>",
  ],
  responsive: {
    0: { items: 1 },
    768: { items: 1 },
    992: { items: 1 },
  },
};

const Hero = () => (
  <section className="hero-section">
    <OwlCarousel {...options}>
      {/* Slide 1 - New Arrivals */}
      <div
        className="slide-item"
        style={{
          height: "500px",
          backgroundImage: `url(${slider1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="slide-content">
          <span>Fresh In Stock</span>
          <h2>Discover New Arrivals</h2>
          <p>Explore the latest trends and must-have products.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>

      {/* Slide 2 - Bestsellers */}
      <div
        className="slide-item"
        style={{
          height: "500px",
          backgroundImage: `url(${slider2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="slide-content">
          <span>Top Picks</span>
          <h2>Bestsellers of the Season</h2>
          <p>Grab the most popular products before they sell out!</p>
          <button className="shop-btn">View Collection</button>
        </div>
      </div>

      {/* Slide 3 - Mid-Season Sale */}
      <div
        className="slide-item"
        style={{
          height: "500px",
          backgroundImage: `url(${slider3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="slide-content">
          <span>Up To 60% Off Now</span>
          <h2>Mid-Season Sale</h2>
          <p>Save big on selected items. Limited time offer!</p>
          <button className="shop-btn">Shop Sale</button>
        </div>
      </div>

      {/* Slide 4 - Exclusive Deals */}
      <div
        className="slide-item"
        style={{
          height: "500px",
          backgroundImage: `url(${slider4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="slide-content">
          <span>Exclusive Offers</span>
          <h2>Members Only Deals</h2>
          <p>Sign up now to unlock exclusive discounts and rewards.</p>
          <button className="shop-btn">Join Now</button>
        </div>
      </div>
    </OwlCarousel>
  </section>
);

export default Hero;
