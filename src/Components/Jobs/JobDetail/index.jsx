import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const JobDetail = (props) => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="container mt-4">
      <div className="grid grid-cols-5">
        <div className="col-start-1 col-span-3  ml-24 mr-20">
          <div>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusamus.</h1>
            <p className="py-2">Lorem ipsum dolor sit amet.</p>
            <hr />


          </div>

          <img className="w-full" src="https://picsum.photos/400" alt="" />
        </div>
        {/*  */}
        <div className="col-span-2 w-3/4">
          <Tabs defaultActiveKey="2" onChange={callback}>
            <TabPane
              className="border pt-4"
              tab={<button className="border px-8 py-2">Basic</button>}
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
              tab={<button className="border px-8 py-2">Standard</button>}
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
              tab={<button className="border px-8 py-2">Premium</button>}
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
    </div>
  );
};

export default JobDetail;
