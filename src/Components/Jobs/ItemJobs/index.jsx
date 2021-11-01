import { Card, Image, Popover } from "antd";
import React from "react";
import { HeartFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import notFoundImage from "../../../assets/img/notFoundImg.png";

const ItemJobs = (props) => {
  const { _id, name, image } = props.item;

  const content = (
    <div>
      <p>Save to My first list</p>
    </div>
  );

  return (
    <NavLink to={`/detail/${_id}`}>
      <Card
      className="w-full xl:w-72 mb-9"
        cover={
          <Image
            placeholder={true}
            preview={false}
            height="176px"
            src={image}
          />
        }
        actions={[
          <Popover style={{ backgroundColor: "#000" }} content={content}>
            <HeartFilled style={{ color: "#b5b6ba" }} />
          </Popover>,

          <p>Starting at $10</p>
        ]}
      >
        <p>{name}</p>
      </Card>
    </NavLink>
  );
};

export default ItemJobs;
