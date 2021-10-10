import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 mt-20 border-t border-gray-300 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container mt-10 grid mx-auto  gap-y-8 sm:grid-cols-3 md:grid-cols-5">
        <div className=" space-y-4">
          <h2 className="font-medium">Categories</h2>
          <div className=" text-sm dark:text-coolGray-400">
            <ul>
              <li><a href="#">Graphics & Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Writing & Translation</a></li>
              <li><a href="#">Video & Animation</a></li>
              <li><a href="#">Music & Audio</a></li>
              <li><a href="#">Programming & Tech</a></li>
              <li><a href="#">Data</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className=" space-y-4">
          <h2 className="font-medium">About</h2>
          <div className=" text-sm dark:text-coolGray-400">
          <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press & News</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Intellectual Property Claims</a></li>
              <li><a href="#">Investor Relations</a></li>

            </ul>
          </div>
        </div>
        <div className=" space-y-4">
          <h2 className="font-medium">Support</h2>
          <div className=" text-sm dark:text-coolGray-400">
          <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Trust & Safety</a></li>
              <li><a href="#">Selling on Fiverr</a></li>
              <li><a href="#">Buying on Fiverr</a></li>
            </ul>
          </div>
        </div>
        <div className=" space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className=" text-sm dark:text-coolGray-400">
          <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Community Standards</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Invite a Friend</a></li>
              <li><a href="#">Become a Seller</a></li>
              <li><a href="#">Fiverr Elevate</a></li>

            </ul>
          </div>
        </div>

        <div className=" space-y-4">
          <h2 className="font-medium">CommuMore From Fiverrnity</h2>
          <div className=" text-sm dark:text-coolGray-400">
          <ul>
              <li><a href="#">Fiverr Business</a></li>
              <li><a href="#">Fiverr Pro</a></li>
              <li><a href="#">Fiverr Studios</a></li>
              <li><a href="#">Fiverr Logo Maker</a></li>
              <li><a href="#">Fiverr Guides</a></li>
              <li><a href="#">Get Inspired</a></li>
              <li><a href="#">ClearVoice</a></li>
              <li><a href="#">AND CO</a></li>
              <li><a href="#">Learn</a></li>
              <li><a href="#">Working Not Working</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex  px-6 pt-12 text-sm border-t border-gray-300 ">
        <span className="dark:text-coolGray-400">
          © Copyright 1986. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
