import React, { useEffect, useState } from "react";
import Business from "../../Components/Business";
import HomeCarousel from "../../Components/Carousel";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MarketPlace from "../../Components/MarketPlace";
import Service from "../../Components/ProfessionalService";
import Proposition from "../../Components/SellingProposition";
import Testimonial from "../../Components/Testimonial";
import "./style.module.css";

const Home = (props) => {
  return (
    <>
      <Header />
      <HomeCarousel />

      <div style={{ background: "#fafafa" }}>
        <ul className="grid grid-cols-4 md:flex md:flex-auto md:justify-center md:align-middle p-4">
          <span
            className="pt-4 text-base font-semibold hidden md:block"
            style={{ color: "#b5b6ba" }}
          >
            Trusted by :
          </span>

          <li className="py-4 md:py-0 px-10">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
              alt="facebook"
            />
          </li>
          <li className="py-4 md:py-0 px-10">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
              alt="google"
            />
          </li>
          <li className="py-4 md:py-0 px-10">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
              alt="netflix"
            />
          </li>
          <li className="py-4 md:py-0 px-10">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
              alt="p&g"
            />
          </li>
          <li className="hidden md:block py-4 md:py-0 px-10">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
              alt="paypal"
            />
          </li>
        </ul>
      </div>
      <Service />

      <div className="py-24" style={{ backgroundColor: "#f1fdf7" }}>
        <Proposition />
      </div>

      <MarketPlace />
      <Business />
      <Testimonial />

      <Footer />
    </>
  );
};

export default Home;
