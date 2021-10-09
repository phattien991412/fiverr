import React from "react";
import Slider from "react-slick";
import './style.module.css'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container mt-24">
      <Slider {...settings}>
        <div>
          <div className="flex">
            <div className="w-2/5">
              <img
                className="w-full "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                alt="testimonial"
              />
            </div>
            <div className="w-3/5 pl-16 pt-10">
              <h5 className="text-xl font-normal" style={{ color: "#7a7d85" }}>
                Kay Kim, Co-Founder | <span>
                  <img
                    className="w-1/12 logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-mono">
                <i className="text-3xl font-medium">
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the world — it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
