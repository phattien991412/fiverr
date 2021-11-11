import React, { useState } from "react";
import Slider from "react-slick";
import { CaretRightOutlined } from "@ant-design/icons";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import TestimoialKayKim from "../../assets/video/kaykim-testimonial.mp4";
import TestimonialCaitlin from "../../assets/video/caitlin-testimonial.mp4";
import TestimonialTimDan from "../../assets/video/tim-dan-testimonial.mp4";
import TestimonialBrighid from "../../assets/video/brighid-testimonial.mp4";

const Testimonial = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function NextArrow(props) {
    const { style } = props;
    return <div style={{ ...style, display: "none" }} />;
  }

  function PrevArrow(props) {
    const { style } = props;
    return <div style={{ ...style, display: "none" }} />;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
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
          autoplay: true,
          fade: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          fade: false
        }
      }
    ]
  };
  return (
    <div className="xl:container xl:mx-0 mx-8 mt-24 ">
      <Slider className="xl:pb-24 border-b border-gray-300" {...settings}>
        <div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative w-full xl:w-2/5">
              <LazyLoadImage
                className="w-full rounded ml-0 xl:ml-2 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36 md:top-40 md:left-80 lg:top-24 lg:left-1/2 xl:top-32 xl:left-60">
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
                    controls={true}
                    width="800px"
                    height="450px"
                    url={TestimoialKayKim}
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full lg:pl-6 lg:pt-0 xl:w-3/5 xl:pl-16 pt-10">
              <h5
                className="text-lg xl:text-xl font-normal"
                style={{ color: "#7a7d85" }}
              >
                Kay Kim, Co-Founder
                <br className="xl:hidden" />
                <span className=" xl:border-l xl:border-gray-400 xl:ml-4 xl:h-9">
                  <LazyLoadImage
                    className="w-1/4 xl:w-1/12 xl:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif xl:pr-16">
                <i className="text-2xl xl:text-3xl font-medium">
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
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative w-full xl:w-2/5">
              <LazyLoadImage
                className="w-full rounded xl:ml-2 ml-1 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36  md:top-40 md:left-80 lg:top-24 lg:left-1/2 xl:top-32 xl:left-60">
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
                    controls={true}
                    width="800px"
                    height="450px"
                    url={TestimonialCaitlin}
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full lg:pl-6 lg:pt-0 xl:w-3/5 xl:pl-16 pt-10">
              <h5
                className="text-lg xl:text-xl font-normal"
                style={{ color: "#7a7d85" }}
              >
                Caitlin Tormey, Chief Commercial Officer
                <span className="xl:border-l xl:border-gray-400 xl:ml-4 xl:h-9">
                  <LazyLoadImage
                    className="w-24 xl:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif xl:pr-16">
                <i className="text-2xl xl:text-3xl font-medium">
                  "We've used Fiverr for Shopify web development, graphic
                  design, and backend web development. Working with Fiverr makes
                  my job a little easier every day."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative w-full xl:w-2/5">
              <LazyLoadImage
                className="w-full rounded xl:ml-2 -pl-1  "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36  md:top-40 md:left-80 lg:top-24 lg:left-1/2 xl:top-32 xl:left-60">
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
                    controls={true}
                    width="800px"
                    height="450px"
                    url={TestimonialTimDan}
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full lg:pl-6 lg:pt-0 xl:w-3/5 xl:pl-16 pt-10">
              <h5
                className="text-lg xl:text-xl font-normal"
                style={{ color: "#7a7d85" }}
              >
                Tim and Dan Joo, Co-Founders
                <span className="xl:border-l xl:border-gray-400 xl:ml-4 xl:h-9">
                  <LazyLoadImage
                    className="w-36 xl:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif xl:pr-16">
                <i className="text-2xl xl:text-3xl font-medium">
                  "When you want to create a business bigger than yourself, you
                  need a lot of help. That's what Fiverr does."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative w-full xl:w-2/5">
              <LazyLoadImage
                className="w-full rounded xl:ml-2 ml-0 "
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                alt="testimonial"
              />
              <div className="absolute bottom-16 left-36  md:top-40 md:left-80 lg:top-24 lg:left-1/2 xl:top-32 xl:left-60">
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
                    controls={true}
                    width="800px"
                    height="450px"
                    url={TestimonialBrighid}
                  />
                </Modal>
              </div>
            </div>
            <div className="w-full lg:pl-6 lg:pt-0 xl:w-3/5 xl:pl-16 pt-10">
              <h5
                className="text-lg xl:text-xl font-normal"
                style={{ color: "#7a7d85" }}
              >
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <br className="xl:hidden" />
                <span className="xl:border-l xl:border-gray-400 xl:ml-4 xl:h-9">
                  <LazyLoadImage
                    className="w-36 xl:ml-3"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                    alt="logo"
                  />
                </span>
              </h5>
              <blockquote className="font-serif xl:pr-16">
                <i className="text-2xl xl:text-3xl font-medium">
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
