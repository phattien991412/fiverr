import React, { useState } from "react";
import Slider from "react-slick";
import { CaretRightOutlined } from "@ant-design/icons";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";

import './style.css'

const Testimonial = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top:"38%"}}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,top:"38%"  }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: false,
          fade: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          fade: false
        }
      }
    ]
  };
  return (
    <div className="md:container md:mx-0 mx-8 mt-24 ">
      <Slider className="md:pb-24 border-b border-gray-300" {...settings}>
        <div>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="relative w-full md:w-2/5">
              <img
                className="w-full rounded md:ml-2 ml-0"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36 md:top-32 md:left-60">
                <button onClick={onOpenModal}>
                  <CaretRightOutlined
                    style={{
                      fontSize: 48,
                      color: "#fff",
                      backgroundColor: "#02020287",
                      borderRadius: "50%",
                      padding: 5,
                      paddingLeft: 10
                    }}
                  />
                </button>
                <Modal open={open} onClose={onCloseModal} center>
                  <ReactPlayer
                    width="750px"
                    height="400px"
                    url="https://www.youtube.com/watch?v=U4LQlauIbBU&ab_channel=GioMuaDongz"
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-16 pt-10">
              <h5 className="text-lg md:text-xl font-normal" style={{ color: "#7a7d85" }}>
                Kay Kim, Co-Founder
                <br className="md:hidden" />
                <span className=" md:border-l md:border-gray-400 md:ml-4 md:h-9">
                  <img
                    className="w-1/4 md:w-1/12 md:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif md:pr-16">
                <i className="text-2xl md:text-3xl font-medium">
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
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="relative w-full md:w-2/5">
              <img
                className="w-full rounded md:ml-2 ml-1 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36  md:top-32 md:left-60">
                <button onClick={onOpenModal}>
                  <CaretRightOutlined
                    style={{
                      fontSize: 48,
                      color: "#fff",
                      backgroundColor: "#02020287",
                      borderRadius: "50%",
                      padding: 5,
                      paddingLeft: 10
                    }}
                  />
                </button>
                <Modal open={open} onClose={onCloseModal} center>
                  <ReactPlayer
                    width="750px"
                    height="400px"
                    url="https://www.youtube.com/watch?v=U4LQlauIbBU&ab_channel=GioMuaDongz"
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-16 pt-10">
              <h5 className="text-lg md:text-xl font-normal" style={{ color: "#7a7d85" }}>
                Caitlin Tormey, Chief Commercial Officer
                <span className="md:border-l md:border-gray-400 md:ml-4 md:h-9">
                  <img
                    className="w-24 md:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif md:pr-16">
                <i className="text-2xl md:text-3xl font-medium">
                  "We've used Fiverr for Shopify web development, graphic
                  design, and backend web development. Working with Fiverr makes
                  my job a little easier every day."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="relative w-full md:w-2/5">
              <img
                className="w-full rounded md:ml-2 -pl-1  "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36  md:top-32 md:left-60">
                <button onClick={onOpenModal}>
                  <CaretRightOutlined
                    style={{
                      fontSize: 48,
                      color: "#fff",
                      backgroundColor: "#02020287",
                      borderRadius: "50%",
                      padding: 5,
                      paddingLeft: 10
                    }}
                  />
                </button>
                <Modal open={open} onClose={onCloseModal} center>
                  <ReactPlayer
                    width="750px"
                    height="400px"
                    url="https://www.youtube.com/watch?v=U4LQlauIbBU&ab_channel=GioMuaDongz"
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-16 pt-10">
              <h5 className="text-lg md:text-xl font-normal" style={{ color: "#7a7d85" }}>
                Tim and Dan Joo, Co-Founders
                <span className="md:border-l md:border-gray-400 md:ml-4 md:h-9">
                  <img
                    className="w-36 md:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif md:pr-16">
                <i className="text-2xl md:text-3xl font-medium">
                  "When you want to create a business bigger than yourself, you
                  need a lot of help. That's what Fiverr does."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="relative w-full md:w-2/5">
              <img
                className="w-full rounded md:ml-2 ml-0 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36  md:top-32 md:left-60">
                <button onClick={onOpenModal}>
                  <CaretRightOutlined
                    style={{
                      fontSize: 48,
                      color: "#fff",
                      backgroundColor: "#02020287",
                      borderRadius: "50%",
                      padding: 5,
                      paddingLeft: 10
                    }}
                  />
                </button>
                <Modal open={open} onClose={onCloseModal} center>
                  <ReactPlayer
                    width="750px"
                    height="400px"
                    url="https://www.youtube.com/watch?v=U4LQlauIbBU&ab_channel=GioMuaDongz"
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-16 pt-10">
              <h5 className="text-lg md:text-xl font-normal" style={{ color: "#7a7d85" }}>
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <br className="md:hidden" />
                <span className="md:border-l md:border-gray-400 md:ml-4 md:h-9">
                  <img
                    className="w-36 md:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif md:pr-16">
                <i className="text-2xl md:text-3xl font-medium">
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
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
