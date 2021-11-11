import React, { useEffect, useState } from "react";
import HeaderJobs from "../../Components/Jobs/HeaderJobs";
import Footer from "../../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Rate, Tabs } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Menu } from "antd";
import "./style.css";
import { fetchJobsDetail } from "../../store/action/jobs";


const Detail = () => {
  const { SubMenu } = Menu;
  const { TabPane } = Tabs;

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  function callback(key) {
    console.log(key);
  }

  const [table, setTable] = useState(false);

  const stopFixed = () => {
    console.log(window.scrollY)
    if(window.scrollY <= 1500) {
      setTable(true)
    } else {
      setTable(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", stopFixed);

    return () => window.removeEventListener("scroll", stopFixed);
  }, []);


  const dispatch = useDispatch();
  const detail = useSelector((state) => state.jobs.detail);
  useEffect(() => {
    // const { id } = props.match.params;
    dispatch(fetchJobsDetail());
  }, []);

  return (
    <>
      <HeaderJobs/>
      <div className="xl:container mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="mx-7 xl:col-start-1 lg:col-span-3  xl:ml-24 xl:mr-20">
          <div>
            <h1 className="mb-0 text-2xl xl:text-3xl">
              I will do custom CSS, HTML Javascript coding
              {/* {detail.name} */}
            </h1>
            <div className="flex h-16 mb-4 mt-2 xl:py-2 xl:mb-2">
              <img
                className="rounded-full"
                src="https://picsum.photos/50"
                alt=""
              />
              <div className="text-center align-middle xl:flex ">
                <div className="flex">
                  <p className="text-base px-2 my-auto font-semibold">Kudo</p>
                  <p className="text-base pr-2 my-auto text-gray-600 font-medium">
                    Level 2 Seller
                  </p>
                </div>
                <div className="flex">
                  <span className="my-auto px-2 xl:h-5 xl:mt-2.5 ">
                    <Rate
                      style={{ paddingBottom: 4, fontSize: 16 }}
                      value={5}
                      disabled
                    />{" "}
                    (24){" "}
                  </span>
                  <p className="pl-2 my-auto text-gray-500 font-medium xl:pt-0.5 ">
                    4 Orders in Queue
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <img className="w-full" src="https://picsum.photos/400" alt="" />
        </div>
        {/*  */}
        <div className="w-5/6  ml-8 md:pt-10 md:w-11/12 lg:col-span-2 lg:ml-0 lg:w-11/12 lg:pt-0 xl:w-4/5 ">
          <Tabs
            className={table ? "xl:fixed" : "bg-white xl:static"}
            defaultActiveKey="2"
            onChange={callback}
          >
            <TabPane
              className="border pt-4"
              tab={
                <button className="active border px-4 py-2 md:px-8 xl:py-4 text-base text-gray-500 font-medium focus:text-green-500 bg-gray-100 focus:bg-white ">
                  Basic
                </button>
              }
              key="1"
            >
              <div>
                <div className="grid grid-cols-4 text-center">
                  <div>
                    <h3 className="md:text-lg md:-ml-16 lg:ml-5 xl:ml-2">Basic</h3>
                  </div>
                  <div className="col-start-4 md:text-lg">
                    <p>$1000</p>
                  </div>
                </div>

                <div className="mx-9">
                  <p className="mt-3 mb-10">Lorem ipsum dolor sit amet.</p>

                  <ul className="mb-4">
                    <li className="mb-2 font-bold md:text-base">
                      30 Days Delivery <span>Revision</span>
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Design Customization
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Content Upload
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Responsive Design
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Inclue Source Code
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      1 Pages
                    </li>
                  </ul>

                  <button className="text-white font-semibold bg-green-500 rounded py-2 px-4 text-center w-full">
                    Continue ($1000)
                  </button>
                  <p className="text-center text-green-500 font-semibold mt-2">
                    Compare packages
                  </p>
                </div>
              </div>
            </TabPane>
            <TabPane
              className="border pt-4"
              tab={
                <button className="border px-4 py-2 xl:px-8 xl:py-4 text-base text-gray-500 font-medium focus:text-green-500 bg-gray-100 focus:bg-white">
                  Standard
                </button>
              }
              key="2"
            >
              <div>
                <div className="grid grid-cols-4 text-center">
                  <div>
                    <h3 className="ml-7 md:text-lg md:-ml-10  lg:ml-9">
                      Standard
                    </h3>
                  </div>
                  <div className="col-start-4 text-lg">
                    <p>$1000</p>
                  </div>
                </div>

                <div className="mx-9">
                  <p className="mt-3 mb-10">Lorem ipsum dolor sit amet.</p>

                  <ul className="mb-4">
                    <li className="mb-2 font-bold md:text-base">
                      30 Days Delivery <span>Revision</span>
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Design Customization
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Content Upload
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Responsive Design
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Inclue Source Code
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      1 Pages
                    </li>
                  </ul>

                  <button className="text-white font-semibold bg-green-500 rounded py-2 px-4 text-center w-full">
                    Continue ($1000)
                  </button>
                  <p className="text-center text-green-500 font-semibold mt-2">
                    Compare packages
                  </p>
                </div>
              </div>
            </TabPane>
            <TabPane
              className="border pt-4"
              tab={
                <button className="border px-4 py-2 xl:px-8 xl:py-4 text-base text-gray-500 font-medium focus:text-green-500 bg-gray-100 focus:bg-white">
                  Premium
                </button>
              }
              key="3"
            >
              <div>
                <div className="grid grid-cols-4 text-center">
                  <div>
                    <h3 className="ml-7 md:-ml-10 md:text-lg lg:ml-9">
                      Premium
                    </h3>
                  </div>
                  <div className="col-start-4 md:text-lg">
                    <p>$1000</p>
                  </div>
                </div>

                <div className="mx-9">
                  <p className="mt-3 mb-10">Lorem ipsum dolor sit amet.</p>

                  <ul className="mb-4">
                    <li className="mb-2 font-bold md:text-base">
                      30 Days Delivery <span>Revision</span>
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Design Customization
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Content Upload
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Responsive Design
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      Inclue Source Code
                    </li>
                    <li className="mb-2 md:font-medium md:text-gray-500">
                      1 Pages
                    </li>
                  </ul>

                  <button className="text-white font-semibold bg-green-500 rounded py-2 px-4 text-center w-full">
                    Continue ($1000)
                  </button>
                  <p className="text-center text-green-500 font-semibold mt-2">
                    Compare packages
                  </p>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>

      {/* Info the gig & the seller */}
      <div className="mx-8 grid xl:grid-cols-2 xl:ml-24 mt-16">
        <div>
          {/* The gig */}
          <div className="border-b-2">
            <h3 className="text-lg font-semibold">About This Gig</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <span>Hello,</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              omnis assumenda amet sit, perspiciatis distinctio beatae ab
              consequatur modi iusto.
            </p>

            <h4>Things I offer</h4>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 pt-4">
            <div>
              <span>Program Language</span>
              <ul>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="col-start-2">
              <span>Expertise</span>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </div>

          {/* Info the seller */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold">About The Seller</h3>
            <div className="flex">
              <img
                src="https://picsum.photos/150"
                className="rounded-full mt-6"
                alt=""
              />
              <div className="ml-4 mt-6">
                <span className="font-medium text-gray-500">Kudo</span>
                <p className="mb-3">Wed Developer</p>
                <Rate value={5} disabled /> <br />
                <button className="border border-black mt-2 px-4 py-2 rounded font-medium hover:bg-gray-500 hover:text-white hover:border-gray-500">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h3 className="text-lg font-semibold">FAQ</h3>
            <Menu mode="inline" onOpenChange={onOpenChange} className="w-full">
              <SubMenu
                title={
                  <span className="text-base text-gray-600 font-medium">
                    Lorem, ipsum dolor.
                  </span>
                }
              >
                <Menu.Item className="font-medium text-gray-500">
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque, quasi.{" "}
                </Menu.Item>
              </SubMenu>
            </Menu>
            <Menu mode="inline" onOpenChange={onOpenChange} className="w-full">
              <SubMenu
                title={
                  <span className="text-base text-gray-600 font-medium">
                    Lorem, ipsum dolor.
                  </span>
                }
              >
                <Menu.Item className="font-medium text-gray-500">
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque, quasi.{" "}
                </Menu.Item>
              </SubMenu>
            </Menu>
            <Menu mode="inline" onOpenChange={onOpenChange} className="w-full">
              <SubMenu
                title={
                  <span className="text-base text-gray-600 font-medium">
                    Lorem, ipsum dolor.
                  </span>
                }
              >
                <Menu.Item className="font-medium text-gray-500">
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque, quasi.{" "}
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>

          {/* Rating */}
          <div className="mt-10 grid grid-cols-1 xl:grid-cols-2">
            {/* left content */}
            <div className="col-start-1 col-span-1">
              <p className="text-lg font-semibold">
                8,761 Reviews &nbsp; <Rate value={5} disabled />{" "}
              </p>

              <div className="flex">
                <p
                  className="mr-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  5 Stars
                </p>
                <div className="relative pt-1 w-1/2">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-400">
                    <div
                      style={{ width: "88%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                    />
                  </div>
                </div>
                <p
                  className="ml-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  (7677)
                </p>
              </div>

              <div className="flex">
                <p
                  className="mr-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  4 Stars
                </p>
                <div className="relative pt-1 w-1/2">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-400">
                    <div
                      style={{ width: "16%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                    />
                  </div>
                </div>
                <p
                  className="ml-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  (789)
                </p>
              </div>

              <div className="flex">
                <p
                  className="mr-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  3 Stars
                </p>
                <div className="relative pt-1 w-1/2">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-400">
                    <div
                      style={{ width: "4%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                    />
                  </div>
                </div>
                <p
                  className="ml-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  (150)
                </p>
              </div>

              <div className="flex">
                <p
                  className="mr-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  2 Stars
                </p>
                <div className="relative pt-1 w-1/2">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-400">
                    <div
                      style={{ width: "2%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                    />
                  </div>
                </div>
                <p
                  className="ml-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  (85)
                </p>
              </div>

              <div className="flex">
                <p
                  className="mr-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  1 Stars
                </p>
                <div className="relative pt-1 w-1/2">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-400">
                    <div
                      style={{ width: "1%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                    />
                  </div>
                </div>
                <p
                  className="ml-4 text-base font-medium text-blue-500"
                  style={{ marginTop: "-7px" }}
                >
                  (60)
                </p>
              </div>
            </div>

            {/* Right content */}
            <div className="xl:col-start-2">
              <p className="text-lg text-right">
                Sort by <span className="font-medium">Most Relevant</span>
              </p>
              <div className="-mt-1">
                <p className="text-base font-medium mb-3">Rating Breakdown</p>
                <div className="flex justify-between">
                  <p className="text-gray-400 font-medium text-base mb-3">
                    Seller comunication level
                  </p>
                  <div className="flex">
                    <p className="mr-1 mb-3">5</p>
                    <StarFilled
                      style={{ color: "#fadb14", marginTop: "5px" }}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400 font-medium text-base mb-3">
                    Recommend to a friend
                  </p>
                  <div className="flex">
                    <p className="mr-1 mb-3">5</p>
                    <StarFilled
                      style={{ color: "#fadb14", marginTop: "5px" }}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400 font-medium text-base">
                    Service as described
                  </p>
                  <div className="flex">
                    <p className="mr-1 mb-3">5</p>
                    <StarFilled
                      style={{ color: "#fadb14", marginTop: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-400 w-1/2 ml-20 mt-8"></div>
    </div>

      <Footer />
    </>
  );
};

export default Detail;
