import { Carousel } from "antd";
import React from "react";
import style from "./style.css";
import { SearchOutlined } from "@ant-design/icons";
import { Rate } from 'antd';

const HomeCarousel = () => {
  return (
    <>
      <Carousel className="h-2/4 " autoplay effect="fade">
        <div
          style={{
            background: `url("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png")`,
            height: 650,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <img
            className="w-full relative  "
            style={{ height: 600 }}
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png"
            alt="car"
          />
          <div className="absolute right-24 bottom-8">
            <p className="text-lg text-white">
              Andrea, <span className="font-semibold">Fashion Designer</span>
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full relative "
            style={{ height: 600 }}
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png"
            alt="car"
          />
          <div className="absolute right-24 bottom-8">
          <Rate disabled defaultValue={5} className="text-xs" />
            <p className="text-lg text-white">
              Moon, <span className="font-semibold">Marketing Experts</span>
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full "
            style={{ height: 600 }}
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png"
            alt="car"
          />
          <div className="absolute right-24 bottom-8">
            <p className="text-lg text-white">
              Ritika, <span className="font-semibold">Shoemaker and Designer</span>
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full "
            style={{ height: 600 }}
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png"
            alt="car"
          />
          <div className="absolute right-24 bottom-8">
            <p className="text-lg text-white">
              Zach, <span className="font-semibold">Bar Owner</span>
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full "
            style={{ height: 600 }}
            src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png"
            alt="car"
          />
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
            className="pl-11 h-12 w-9/12 rounded-tl rounded-bl outline-none"
            placeholder="Try &#34;buiding mobile app&#34; "
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
