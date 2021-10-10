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
                className="w-full rounded ml-2 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                alt="testimonial"
              />
            </div>
            <div className="w-3/5 pl-16 pt-10">
              <h5 className="text-xl font-normal" style={{ color: "#7a7d85" }}>
                Kay Kim, Co-Founder <span className=" border-l border-gray-400 ml-4 h-9">
                  <img
                    className="w-1/12 ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif pr-16">
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
        <div>
          <div className="flex">
            <div className="w-2/5">
              <img
                className="w-full rounded ml-2 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                alt="testimonial"
              />
            </div>
            <div className="w-3/5 pl-16 pt-10">
              <h5 className="text-xl font-normal" style={{ color: "#7a7d85" }}>
              Caitlin Tormey, Chief Commercial Officer  <span className="border-l border-gray-400 ml-4 h-9">
                  <img
                    className="w-24 ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif pr-16">
                <i className="text-3xl font-medium">
                "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-2/5">
              <img
                className="w-full rounded ml-2 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                alt="testimonial"
              />
            </div>
            <div className="w-3/5 pl-16 pt-10">
              <h5 className="text-xl font-normal" style={{ color: "#7a7d85" }}>
              Tim and Dan Joo, Co-Founders <span className="border-l border-gray-400 ml-4 h-9">
                  <img
                    className="w-36 ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif pr-16">
                <i className="text-3xl font-medium">
                "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-2/5">
              <img
                className="w-full rounded ml-2 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                alt="testimonial"
              />
            </div>
            <div className="w-3/5 pl-16 pt-10">
              <h5 className="text-xl font-normal" style={{ color: "#7a7d85" }}>
              Brighid Gannon (DNP, PMHNP-BC), Co-Founder  <span className="border-l border-gray-400 ml-4 h-9">
                  <img
                    className="w-36 ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif pr-16">
                <i className="text-3xl font-medium">
                "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."
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
