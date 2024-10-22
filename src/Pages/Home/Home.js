import React from "react";
import Layout from "../../Components/Layout";
import Hero from "../../Pages/Home/hero-section";
import Shipping from "../../Pages/Home/Shipping";
import Deals from "../../Pages/Home/Deals-section";
import Offers from "../../Pages/Home/Offers";
import Video from "./Video-section";
import Shop from "./Shopwithus-section";
import Testimonial from "./Testimonial";
import Subscribtion from "./Subscribtion-section";

function Home() {
  return (
    <>
      <Layout>
        {/* hero-section */}
        <Hero />

        {/* shipping-section */}
        <Shipping />

        {/* Deals-section */}
        <Deals />

        {/* offer-section */}
        <Offers />

        {/* video-section */}
        <Video />

        {/* shop-with-us-section */}
        <Shop />

        {/* Testimonial-section */}
        <Testimonial />

        {/* subscribtion-section */}
        <Subscribtion />
      </Layout>
    </>
  );
}

export default Home;
