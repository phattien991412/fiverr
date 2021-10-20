import { Carousel } from "antd";
import React from "react";
import "./style.css";
import { SearchOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const HomeCarousel = () => {
  return (
    <>
      <Carousel className="carousel h-2/4 " autoplay effect="fade">
        <div className="relative">
          <div className="hero hero-andrea"></div>
          <div className="absolute right-24 bottom-8">
            <p className="text-lg text-white">
              Andrea, <span className="font-semibold">Fashion Designer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-moon"></div>
          <div className="absolute right-24 bottom-8">
            <Rate disabled defaultValue={5} className="text-xs" />
            <p className="text-lg text-white">
              Moon, <span className="font-semibold">Marketing Experts</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-ritika"></div>
          <div className="absolute right-24 bottom-8">
            <p className="text-lg text-white">
              Ritika,
              <span className="font-semibold"> Shoemaker and Designer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-zach"></div>
          <div className="absolute right-24 bottom-8">
            <p className="text-lg text-white">
              Zach, <span className="font-semibold">Bar Owner</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-gabrielle"></div>
          <div className="absolute right-24 bottom-8">
            <Rate disabled defaultValue={5} className="text-xs" />
            <p className="text-lg text-white">
              Gabrielle, <span className="font-semibold">Video Editor</span>
            </p>
          </div>
        </div>
      </Carousel>
      <div className="grid grid-cols-2  text-white absolute top-1/4 left-24 -translate-x-1/2 translate-y-1/2">
        <h2 className="text-white text-5xl">
          Find the perfect <i>freelance</i> services for your business
        </h2>
        <div className="col-start-1 relative mb-4">
          <SearchOutlined
            className="text-xl text-black absolute left-3 top-4 z-20 "
            style={{ color: "#9ca3af" }}
          />

          <input
            className="pl-11 h-12 w-9/12 rounded-tl rounded-bl outline-none text-black"
            placeholder="Try &#34;buiding mobile app&#34;"
            type="text"
          />
          <button className="bg-green-500 text-white h-12 px-6 rounded-tr rounded-br">
            Search
          </button>
        </div>
        <div className=" col-start-1">
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
