import { Carousel } from "antd";
import React from "react";
import "./style.css";
import { SearchOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import Slider from "react-slick";

const HomeCarousel = () => {
  function SampleNextArrow(props) {
    const { style } = props;
    return <div style={{ ...style, display: "none" }} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div style={{ ...style, display: "none" }} />;
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          slidesToShow: 0,
          autoplay: false,
          fade: false
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        <div className="relative">
          <div className="hero hero-andrea"></div>
          <div className="hidden md:block absolute right-24 bottom-8">
            <p className="text-sm md:text-lg text-white">
              Andrea, <span className="font-semibold">Fashion Designer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-moon"></div>
          <div className="absolute right-24 bottom-8 hidden md:block">
            <Rate disabled defaultValue={5} className="text-xs" />
            <p className="text-lg text-white">
              Moon, <span className="font-semibold">Marketing Experts</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-ritika"></div>
          <div className="absolute right-24 bottom-8 hidden md:block">
            <p className="text-lg text-white">
              Ritika,
              <span className="font-semibold"> Shoemaker and Designer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-zach"></div>
          <div className="absolute right-24 bottom-8 hidden md:block">
            <p className="text-lg text-white">
              Zach, <span className="font-semibold">Bar Owner</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-gabrielle"></div>
          <div className="absolute right-24 bottom-8 hidden md:block">
            <Rate disabled defaultValue={5} className="text-xs" />
            <p className="text-lg text-white">
              Gabrielle, <span className="font-semibold">Video Editor</span>
            </p>
          </div>
        </div>
      </Slider>

      <div className="grid grid-cols-2   text-white absolute top-24 left-8  md:top-1/4 md:left-24 -translate-x-1/2 translate-y-1/2">
        <div className="col-span-2 md:col-span-1">
          <h2 className="col-span-2 md:col-span-1  text-white text-4xl md:text-5xl">
            Find the perfect <i>freelance</i> services for your business
          </h2>
          <div className="col-span-2 md:col-span-1 relative mb-4 pr-8 md:pr-0">
            <SearchOutlined
              className="text-xl text-black absolute left-3 top-4 z-20 "
              style={{ color: "#9ca3af" }}
            />

            <input
              className="pl-11 mb-4 md:mb-0 h-12 w-full md:w-9/12 rounded md:rounded-tr-none md:rounded-br-none md:rounded-tl md:rounded-bl outline-none text-black"
              placeholder="Try &#34;buiding mobile app&#34;"
              type="text"
            />
            <button className="bg-green-500 text-white h-12 px-6 w-full md:w-1/6 rounded md:rounded-tl-none md:rounded-bl-none md:rounded-tr md:rounded-br">
              Search
            </button>
          </div>
        </div>
        <div className="hidden md:block col-start-1">
          <ul className="flex">
            <span className="font-semibold">Popular: </span>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">
              Website Design
            </li>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">
              WordPress
            </li>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">
              Logo Design
            </li>
            <li className=" mx-4 px-2 font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ">
              Dropshipping
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
