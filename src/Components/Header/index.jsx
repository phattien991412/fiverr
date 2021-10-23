import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/action/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.auth.me);
  const handleSignOut = () => {
    dispatch(signOut());
  };
  // const [header, setHeader] = useState(false);

  // const changeLayoutHeader = () => {
  //   if (window.scrollY = 0) {
  //     setHeader(false);
  //   } else {
  //     setHeader(true);
  //   }
  // };

  // useEffect(() => {
  //   changeLayoutHeader();
  //   window.addEventListener("scroll", changeLayoutHeader);
  // }, []);

  return (
    <header className="header md:p-4 md:fixed z-10 w-full ">
      <div className="nav sm:container grid grid-cols-3 sm:flex sm:justify-between h-16 mx-auto">
        <div className="md:hidden col-span-3 grid grid-cols-3">
          <button className="p-4 col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 z-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <a
            href="#"
            aria-label="Back to homepage"
            className="pt-4 pl-6"
          >
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#404145">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </a>

          <NavLink
            to="/signin"
            className="text-gray-600 text-base font-semibold text-center pt-4  "
          >
            Join
          </NavLink>
        </div>

        <a
          href="#"
          aria-label="Back to homepage"
          className="md:block hidden sm:flex sm:items-center p-2 col-start-2"
        >
          <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#fff">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </a>

        <ul className="items-stretch mr-14 hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
            >
              Fiverr Business
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base "
            >
              Explore
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base "
            >
              Become a Seller
            </NavLink>
          </li>
          {me ? (
            <li className="flex">
              <NavLink
                to="/me"
                className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base "
              >
                Hi, Kudo
              </NavLink>
              <button
                onClick={handleSignOut}
                className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base "
              >
                Sign out
              </button>
            </li>
          ) : (
            <>
              <li className="flex">
                <NavLink
                  to="/signin"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base "
                >
                  Sign In
                </NavLink>
              </li>
              <li className="flex p-2">
                <NavLink
                  to="/signin"
                  className="joinButton  flex items-center px-6 h-8 -mb-1 bg-transparent  hover:text-white text-white text-base font-semibold border border-white hover:bg-green-500 hover:border-green-500 rounded "
                >
                  Join
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
