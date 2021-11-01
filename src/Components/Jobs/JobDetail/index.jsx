import React from "react";
import { Progress, Rate, Tabs } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Menu } from "antd";
import "./style.css";

const JobDetail = (props) => {
  const { SubMenu } = Menu;
  const { TabPane } = Tabs;

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

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
  return (
    <div className="container mt-4">
      <div className="grid grid-cols-5">
        <div className="col-start-1 col-span-3  ml-24 mr-20">
          <div>
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, accusamus.
            </h1>
            <p className="py-2">Lorem ipsum dolor sit amet.</p>
            <hr />
          </div>

          <img className="w-full" src="https://picsum.photos/400" alt="" />
        </div>
        {/*  */}
        <div className="col-span-2 w-4/5">
          <Tabs className="fixed" defaultActiveKey="2" onChange={callback}>
            <TabPane
              className="border pt-4"
              tab={<button className="active border px-8 py-4 text-base text-gray-500 font-medium focus:text-green-500 bg-gray-100 focus:bg-white ">Basic</button>}
              key="1"
            >
              <div>
                <div className="grid grid-cols-4 text-center">
                  <div>
                    <h3>Basic</h3>
                  </div>
                  <div className="col-start-4">
                    <p>$1000</p>
                  </div>
                </div>

                <div className="mx-9">
                  <p className="mt-3 mb-10">Lorem ipsum dolor sit amet.</p>

                  <ul className="mb-4">
                    <li className="mb-2 font-bold">
                      30 Days Delivery <span>Revision</span>
                    </li>
                    <li className="mb-2">Design Customization</li>
                    <li className="mb-2">Content Upload</li>
                    <li className="mb-2">Responsive Design</li>
                    <li className="mb-2">Inclue Source Code</li>
                    <li className="mb-2">1 Pages</li>
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
              tab={<button className="border px-8 py-4 text-base text-gray-500 font-medium focus:text-green-500 bg-gray-100 focus:bg-white">Standard</button>}
              key="2"
            >
              <div>
                <div className="grid grid-cols-4 text-center">
                  <div>
                    <h3 className="ml-7">Standard</h3>
                  </div>
                  <div className="col-start-4">
                    <p>$1000</p>
                  </div>
                </div>

                <div className="mx-9">
                  <p className="mt-3 mb-10">Lorem ipsum dolor sit amet.</p>

                  <ul className="mb-4">
                    <li className="mb-2 font-bold">
                      30 Days Delivery <span>Revision</span>
                    </li>
                    <li className="mb-2">Design Customization</li>
                    <li className="mb-2">Content Upload</li>
                    <li className="mb-2">Responsive Design</li>
                    <li className="mb-2">Inclue Source Code</li>
                    <li className="mb-2">1 Pages</li>
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
              tab={<button className="border px-8 py-4 text-base text-gray-500 font-medium focus:text-green-500 bg-gray-100 focus:bg-white">Premium</button>}
              key="3"
            >
              <div>
                <div className="grid grid-cols-4 text-center">
                  <div>
                    <h3 className="ml-7">Premium</h3>
                  </div>
                  <div className="col-start-4">
                    <p>$1000</p>
                  </div>
                </div>

                <div className="mx-9">
                  <p className="mt-3 mb-10">Lorem ipsum dolor sit amet.</p>

                  <ul className="mb-4">
                    <li className="mb-2 font-bold">
                      30 Days Delivery <span>Revision</span>
                    </li>
                    <li className="mb-2">Design Customization</li>
                    <li className="mb-2">Content Upload</li>
                    <li className="mb-2">Responsive Design</li>
                    <li className="mb-2">Inclue Source Code</li>
                    <li className="mb-2">1 Pages</li>
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
      <div className="grid grid-cols-2 ml-24 mt-16">
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
          <div className="mt-10 grid grid-cols-2">
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
            <div className="col-start-2">
              <p className="text-lg text-right">
                Sort by <span className="font-medium">Most Relevant</span>
              </p>
              <div className="-mt-1">
                <p className="text-base font-medium mb-3">Rating Breakdown</p>
                <div className="flex justify-between">
                  <p className="text-gray-400 font-medium text-base mb-3">Seller comunication level</p>
                  <div className="flex">
                    <p className="mr-1 mb-3">5</p>
                    <StarFilled style={{ color: "#fadb14", marginTop: '5px' }} />
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400 font-medium text-base mb-3">Recommend to a friend</p>
                  <div className="flex">
                    <p className="mr-1 mb-3">5</p>
                    <StarFilled style={{ color: "#fadb14", marginTop: '5px' }} />
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400 font-medium text-base">Service as described</p>
                  <div className="flex">
                    <p className="mr-1 mb-3">5</p>
                    <StarFilled style={{ color: "#fadb14", marginTop: '5px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-400 w-1/2 ml-20 mt-8"></div>
    </div>
  );
};

export default JobDetail;
