import React, { useEffect, useState } from "react";
import "./style.css";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/action/auth";
import { useSelector } from "react-redux";
import { Collapse } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { fetchTitleJobs } from "../../store/action/jobs";
const Header = () => {
  const { Panel } = Collapse;
  const dispatch = useDispatch();
  const history = useHistory();
  const me = useSelector((state) => state.user.me);
  const title = useSelector((state) => state.jobs.titleJobs);
  console.log("title", title);
  useEffect(() => {
    dispatch(fetchTitleJobs());
  }, []);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const path = history.location.pathname === "/";

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src =
  //     "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
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
    <header className={path ? "lg:fixed lg:p-4 z-40 w-full" : "xl:p-4"}>
      <div className="grid grid-cols-3 mx-auto h-16 border-b md:border-0  md:px-0 md:container xl:pl-20  xl:flex xl:justify-between  ">
        {/* responsive header */}
        <div className="col-span-3 grid grid-cols-3 xl:hidden  md:grid-cols-8 ">
          <p className="pl-6 pt-5 col-span-1 md:col-start-1 md:pl-16 md:pt-7 lg:pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 z-20 md:text-black lg:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </p>

          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="pt-4 pl-6  xl:hidden md:col-start-2 md:pl-1 md:pt-6 lg:pt-4"
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
          </NavLink>

          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="pt-4 pl-6 hidden xl:block md:col-start-2 md:pl-1"
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
          </NavLink>

          {me ? (
            <Collapse className="z-20 md:col-start-7 md:mt-4" ghost>
              <Panel
                className=" w-3/4 "
                header={
                  <span className="text-2xl md:pt-0 md:leading-none  md:text-3xl md:text-white lg:text-white ">
                    <UserOutlined
                      style={{
                        paddingLeft: "3.5rem",
                        paddingTop: 6
                      }}
                    />
                  </span>
                }
                key="1"
              >
                <NavLink
                  to="/me"
                  className="text-white pl-2 font-semibold text-base "
                >
                  Info
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="text-white pl-2 py-1 font-semibold text-base "
                >
                  Sign out
                </button>
              </Panel>
            </Collapse>
          ) : (
            <>
              <NavLink
                to="/signin"
                className="text-font-semibold text-base font-semibold text-center mt-5 text-gray-600 md:col-start-7 md:text-black hidden md:block lg:text-white "
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signin"
                className="text-font-semibold text-base font-semibold text-center mt-5 text-gray-600 md:mr-16  md:col-start-8 md:text-black lg:text-white "
              >
                Join
              </NavLink>
            </>
          )}
        </div>

        {/* End responsive header */}

        {path ? (
          <>
            <NavLink
              to="/"
              aria-label="Back to homepage"
              className="xl:block hidden md:hidden sm:flex sm:items-center p-2 col-start-2"
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
            </NavLink>

            <ul className="items-stretch mr-14 hidden space-x-3 xl:flex">
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
                    Hi, {me.name}
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
          </>
        ) : (
          <>
            <NavLink
              to="/category"
              aria-label="Back to homepage"
              className="xl:block hidden md:hidden sm:flex sm:items-center p-2 col-start-2"
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
            </NavLink>

            <ul className="items-stretch mr-14 hidden space-x-3 xl:flex">
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base"
                >
                  Fiverr Business
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
                >
                  Explore
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
                >
                  Become a Seller
                </NavLink>
              </li>
              {me ? (
                <li className="flex">
                  <NavLink
                    to="/me"
                    className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
                  >
                    Hi, {me.name}
                  </NavLink>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
                  >
                    Sign out
                  </button>
                </li>
              ) : (
                <>
                  <li className="flex">
                    <NavLink
                      to="/signin"
                      className="flex items-center px-2 -mb-1 hover:text-green-500 text-gray-500 font-semibold text-base "
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li className="flex p-2">
                    <NavLink
                      to="/signin"
                      className="flex items-center px-6 h-8 -mb-1 bg-transparent  text-green-500 text-base font-semibold border border-green-500  rounded hover:text-white hover:bg-green-500 "
                    >
                      Join
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </>
        )}
      </div>
      {path ? null : (
        <div className="border-b border-t border-gray-300 hidden md:block ">
          <div className="container flex flex-auto flex-wrap text-center">
            {title.map((item) => {
              return (
                <div
                  key={item._id}
                  className="antialiased mt-3 md:mr-4 xl:mr-10 "
                >
                  <div className="group relative inline-block ">
                    <p className="inline-flex cursor-pointer text-base text-gray-600 font-medium">
                      {item.name}
                    </p>

                    <ul className="w-full z-50 absolute bg-gray-300 opacity-0 pt-1 group-hover:opacity-100 ">
                      {item.subTypeJobs.map((subJobs) => {
                        return (
                          <li>
                            <a
                              className="text-base text-black font-medium rounded-t py-2 px-4"
                              href="#"
                            >
                              {subJobs.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
