import { Card, Image } from "antd";
import React from "react";
import {
  HeartTwoTone,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import notFoundImage from "../../../assets/img/notFoundImg.png";

const ItemJobs = (props) => {
  const { _id, name, image } = props.item;

  return (
    <NavLink to={`/detail/${_id}`}>
      <Card
        style={{ width: 300, marginBottom: 36 }}
        cover={
          <Image
            placeholder={true}
            preview={false}
            height="176px"
            src={image}
          />
        }
        actions={[
          <HeartTwoTone twoToneColor="#eb2f96" key="like" />,

          <EllipsisOutlined key="ellipsis" />
        ]}
      >
        <p>{name}</p>
      </Card>
    </NavLink>
  );
};

export default ItemJobs;
