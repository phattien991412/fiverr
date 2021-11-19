import React, { useCallback, useEffect, useState } from "react";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import "./style.css";

const Footer = () => {
  const { SubMenu } = Menu;
  const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];

  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const backTop = document.getElementById("backTop");

  const handleBackTop = () => {
    backTop.addEventListener("click", () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    );
  };

  return (
    <footer className="xl:container xl:mt-10 p-6 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="hidden mx-8 xl:mx-auto xl:grid xl:grid-cols-5 gap-y-8 ">
        <div className=" space-y-4">
          <h2 className="font-semibold text-base">Categories</h2>
          <div className="text-list dark:text-coolGray-400">
            <ul>
              <li className="mb-4">
                <a href="#">Graphics & Design</a>
              </li>
              <li className="mb-4">
                <a href="#">Digital Marketing</a>
              </li>
              <li className="mb-4">
                <a href="#">Writing & Translation</a>
              </li>
              <li className="mb-4">
                <a href="#">Video & Animation</a>
              </li>
              <li className="mb-4">
                <a href="#">Music & Audio</a>
              </li>
              <li className="mb-4">
                <a href="#">Programming & Tech</a>
              </li>
              <li className="mb-4">
                <a href="#">Data</a>
              </li>
              <li className="mb-4">
                <a href="#">Business</a>
              </li>
              <li className="mb-4">
                <a href="#">Lifestyle</a>
              </li>
              <li className="mb-4">
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" space-y-4">
          <h2 className="font-semibold text-base">About</h2>
          <div className="text-list dark:text-coolGray-400">
            <ul>
              <li className="mb-4">
                <a href="#">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#">Press & News</a>
              </li>
              <li className="mb-4">
                <a href="#">Partnerships</a>
              </li>
              <li className="mb-4">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#">Terms of Service</a>
              </li>
              <li className="mb-4">
                <a href="#">Intellectual Property Claims</a>
              </li>
              <li className="mb-4">
                <a href="#">Investor Relations</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" space-y-4">
          <h2 className="font-semibold text-base">Support</h2>
          <div className="text-list dark:text-coolGray-400">
            <ul>
              <li className="mb-4">
                <a href="#">Help & Support</a>
              </li>
              <li className="mb-4">
                <a href="#">Trust & Safety</a>
              </li>
              <li className="mb-4">
                <a href="#">Selling on Fiverr</a>
              </li>
              <li className="mb-4">
                <a href="#">Buying on Fiverr</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" space-y-4">
          <h2 className="font-semibold text-base">Community</h2>
          <div className="text-list dark:text-coolGray-400">
            <ul>
              <li className="mb-4">
                <a href="#">Events</a>
              </li>
              <li className="mb-4">
                <a href="#">Blog</a>
              </li>
              <li className="mb-4">
                <a href="#">Forum</a>
              </li>
              <li className="mb-4">
                <a href="#">Community Standards</a>
              </li>
              <li className="mb-4">
                <a href="#">Podcast</a>
              </li>
              <li className="mb-4">
                <a href="#">Affiliates</a>
              </li>
              <li className="mb-4">
                <a href="#">Invite a Friend</a>
              </li>
              <li className="mb-4">
                <a href="#">Become a Seller</a>
              </li>
              <li className="mb-4">
                <a href="#">
                  Fiverr Elevate <p className="w-2/5">Exclusive Benefits</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" z-30 space-y-4">
          <h2 className="font-semibold text-base">More From Fiverr </h2>
          <div className="text-list dark:text-coolGray-400">
            <ul>
              <li className="mb-4">
                <a href="#">Fiverr Business</a>
              </li>
              <li className="mb-4">
                <a href="#">Fiverr Pro</a>
              </li>
              <li className="mb-4">
                <a href="#">Fiverr Studios</a>
              </li>
              <li className="mb-4">
                <a href="#">Fiverr Logo Maker</a>
              </li>
              <li className="mb-4">
                <a href="#">Fiverr Guides</a>
              </li>
              <li className="mb-4">
                <a href="#">Get Inspired</a>
              </li>
              <li className="mb-4">
                <a href="#">ClearVoice <p className="w-1/2" style={{width: "45%"}}>Content Marketing</p></a>
              </li>
              <li className="mb-4">
                <a href="#">Fiverr Workspace <p className="w-2/5">Invoice Software</p></a>
              </li>

              <li className="mb-4 w-2/5">
                <a href="#">Learn <p>Online Courses</p></a>
              </li>
              <li className="mb-4">
                <a href="#">Working Not Working</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Menu footer responsive*/}
      <Menu
        className="xl:hidden w-full"
        mode="inline"
        onOpenChange={onOpenChange}
      >
        <SubMenu
          key="sub1"
          title={<span className="font-semibold text-base">Categories</span>}
        >
          <Menu.Item className="text-gray-500 text-base" key="1">
            Graphics & Design
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="2">
            Digital Marketing
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="3">
            Writing & Translation
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="4">
            Video & Animation
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="5">
            Music & Audio
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="6">
            Programming & Tech
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="7">
            Data
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="8">
            Business
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="9">
            Lifestyle
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="10">
            Sitemap
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={<span className="font-semibold text-base">About</span>}
        >
          <Menu.Item className="text-gray-500 text-base" key="11">
            Careers
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="12">
            Press & News
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="13">
            Partnerships
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="14">
            Privacy Policy
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="15">
            Terms of Service
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="16">
            Intellectual Property Claims
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="17">
            Investor Relations
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={<span className="font-semibold text-base">Support</span>}
        >
          <Menu.Item className="text-gray-500 text-base" key="18">
            Help & Support
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="19">
            Trust & Safety
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="20">
            Selling on Fiverr
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="21">
            Buying on Fiverr
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub4"
          title={<span className="font-semibold text-base">Community</span>}
        >
          <Menu.Item className="text-gray-500 text-base" key="22">
            Events
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="23">
            Blog
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="24">
            Forum
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="25">
            Community Standards
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="26">
            Podcast
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="27">
            Affiliates
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="28">
            Invite a Friend
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="29">
            Become a Seller
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="30">
            Fiverr Elevate
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub5"
          title={
            <span className="font-semibold text-base">More From Fiverr</span>
          }
        >
          <Menu.Item className="text-gray-500 text-base" key="31">
            Fiverr Business
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="32">
            Fiverr Pro
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="33">
            Fiverr Studios
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="34">
            Fiverr Logo Maker
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="35">
            Fiverr Guides
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="36">
            Get Inspired
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="37">
            ClearVoice
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="38">
            AND CO
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="39">
            Learn
          </Menu.Item>
          <Menu.Item className="text-gray-500 text-base" key="40">
            Working Not Working
          </Menu.Item>
        </SubMenu>
      </Menu>
      {/* End menu footer */}

      <div className="block xl:flex xl:flex-wrap xl:justify-between  px-0 pt-8 mt-12 text-list border-t border-gray-300 ">
        {/* content-left */}
        <div className="xl:flex grid grid-rows-2 align-middle justify-center ">
          <svg
            className="ml-16 xl:ml-0 mb-2 xl:mb-0"
            width="91"
            height="27"
            viewBox="0 0 91 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#7A7D85">
              <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#7A7D85">
              <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
            </g>
          </svg>

          <p className="xl:pt-1 ml-4 xl:ml-7 mb-4 xl:mb-0 text-gray-400 font-medium">
            @ Fiverr International Ltd. 2021
          </p>
        </div>

        {/* content-right */}
        <div className="flex flex-wrap md:flex-nowrap xl:flex-nowrap justify-center ">
          {/* Logo */}
          <div>
            <ul className="flex flex-wrap md:mb-0 md:mt-2 xl:flex-nowrap ">
              <li className="mx-4">
                <svg
                  fill="#7a7d85"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z"></path>
                </svg>
              </li>
              <li className="mx-4">
                <svg
                  fill="#7a7d85"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z"></path>
                </svg>
              </li>
              <li className="mx-4">
                <svg
                  fill="#7a7d85"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z"></path>
                </svg>
              </li>
              <li className="mx-4">
                <svg
                  fill="#7a7d85"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C4.5 0 0 4.5 0 10C0 14.25 2.625 17.875 6.375 19.25C6.25 18.5 6.25 17.25 6.375 16.375C6.5 15.625 7.5 11.375 7.5 11.375C7.5 11.375 7.25 10.875 7.25 10C7.25 8.625 8.125 7.5 9.125 7.5C10 7.5 10.375 8.125 10.375 8.875C10.375 9.75 9.875 11 9.5 12.25C9.25 13.25 10 14 11 14C12.75 14 14.125 12.125 14.125 9.375C14.125 7 12.375 5.25 10 5.25C7.125 5.25 5.5 7.375 5.5 9.625C5.5 10.5 5.875 11.375 6.25 11.875C6.25 12.125 6.25 12.25 6.25 12.375C6.125 12.75 6 13.375 6 13.5C6 13.625 5.875 13.75 5.625 13.625C4.375 13 3.625 11.25 3.625 9.75C3.625 6.625 5.875 3.75 10.25 3.75C13.75 3.75 16.375 6.25 16.375 9.5C16.375 13 14.25 15.75 11.125 15.75C10.125 15.75 9.125 15.25 8.875 14.625C8.875 14.625 8.375 16.5 8.25 17C8 17.875 7.375 19 7 19.625C8 19.875 9 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0Z"></path>
                </svg>
              </li>
              <li className="mx-4">
                <svg
                  fill="#7a7d85"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.1814 6.06504C15.8442 6.06504 16.3814 5.52778 16.3814 4.86504C16.3814 4.2023 15.8442 3.66504 15.1814 3.66504C14.5187 3.66504 13.9814 4.2023 13.9814 4.86504C13.9814 5.52778 14.5187 6.06504 15.1814 6.06504Z"></path>
                  <path d="M10 15C7.2425 15 5 12.7575 5 10C5 7.2425 7.2425 5 10 5C12.7575 5 15 7.2425 15 10C15 12.7575 12.7575 15 10 15ZM10 7.5C8.62125 7.5 7.5 8.62125 7.5 10C7.5 11.3787 8.62125 12.5 10 12.5C11.3787 12.5 12.5 11.3787 12.5 10C12.5 8.62125 11.3787 7.5 10 7.5Z"></path>
                  <path d="M15 20H5C2.43 20 0 17.57 0 15V5C0 2.43 2.43 0 5 0H15C17.57 0 20 2.43 20 5V15C20 17.57 17.57 20 15 20ZM5 2.5C3.83125 2.5 2.5 3.83125 2.5 5V15C2.5 16.1912 3.80875 17.5 5 17.5H15C16.1688 17.5 17.5 16.1688 17.5 15V5C17.5 3.83125 16.1688 2.5 15 2.5H5Z"></path>
                </svg>
              </li>
            </ul>
          </div>
          {/* last */}
          <div className="mt-3 md:mt-0 xl:mt-0">
            <ul className="flex">
              <li className="mx-4 pt-1">
                <button>
                  <span>
                    <svg
                      className="inline-block"
                      fill="#7a7d85"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                        strokeWidth="0.2"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 font-medium text-gray-500">
                    English
                  </span>
                </button>
              </li>
              <li className="mx-4 pt-1">
                <p className="font-medium text-gray-500">$ USD</p>
              </li>
              <li className="mx-4">
                <svg
                  fill="#7a7d85"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="15.5"
                    fill="white"
                    stroke="currentColor"
                    className="circle-wrapper"
                  ></circle>
                  <path d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z"></path>
                  <path d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative bottom-36 hidden xl:block">
        <div className="grid grid-cols-12 ">
          <UpCircleOutlined
            id="backTop"
            onClick={handleBackTop}
            className="col-start-12 text-5xl font-normal cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
