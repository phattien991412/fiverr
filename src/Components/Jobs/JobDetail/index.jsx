import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const JobDetail = (props) => {
  
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="container">
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-2">
          <img src="https://picsum.photos/400" alt="" />
        </div>
        <div className="col-span-2">
          <Tabs defaultActiveKey="2" onChange={callback}>
            <TabPane
              tab={<button className="border px-8 py-2">Basic</button>}
              key="1"
            >
              Content of Tab Pane 1
            </TabPane>
            <TabPane
              tab={<button className="border px-8 py-2">Standard</button>}
              key="2"
            >
              Content of Tab Pane 2
            </TabPane>
            <TabPane
              tab={<button className="border px-8 py-2">Premium</button>}
              key="3"
            >
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
