import React from "react";

const MarketPlace = () => {
  return (
    <div className="container  ">
      <h2 className="text-3xl my-20 font-bold" >Explore the marketplace</h2>
      <div>
        <ul className="flex flex-wrap text-center">
          <li className="mb-14 w-1/5 col-auto ">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics & Design"
              />
              <p className="mt-5">Graphics & Design</p>
            </a>
          </li>

          <li className="mb-14 w-1/5 col-span-1">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Digital Marketing"
              />
              <p className="mt-5">Digital Marketing</p>
            </a>
          </li>

          <li className="mb-14 w-1/5">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Writing & Translation"
              />
              <p className="mt-5"> Writing & Translation</p>
            </a>
          </li>

          <li className="mb-14 w-1/5">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Video & Animation"
              />
              <p className="mt-5">Video & Animation</p>
            </a>
          </li>

          <li className="mb-14 w-1/5">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Music & Audio"
              />
              <p className="mt-5">Music & Audio</p>
            </a>
          </li>

          <li className="mb-14 w-1/5">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Programming & Tech"
              />
              <p className="mt-5">Programming & Tech</p>
            </a>
          </li>

          <li className="mb-14 w-1/5">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Business"
              />
              <p className="mt-5">Business</p>
            </a>
          </li>

          <li className="mb-14 w-1/5">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Lifestyle"
              />
              <p className="mt-5">Lifestyle</p>
            </a>
          </li>

          <li className="mb-14 w-1/5">
            <a href="#">
              <img
                className="w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Data"
              />
              <p className="m-9">Data</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MarketPlace;