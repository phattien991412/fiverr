import { Card } from "antd";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const ItemJobs = (props) => {
  const {_id, name, image} = props.item;
  
  return (
    <NavLink to={`/detail/${_id}`}>
      <Card 
      style={{ width: 300, marginBottom: 36 }}
      cover={<img className="w-full h-44" alt="example" src={image} />}
      actions={[
        <SettingOutlined key="setting" />,

        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <p>{name}</p>
    </Card>
    </NavLink>
  );
};

export default ItemJobs;
