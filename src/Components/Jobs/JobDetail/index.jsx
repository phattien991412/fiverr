import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rate, Tabs } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Menu } from "antd";
import "./style.css";
import { fetchJobsDetail } from "../../../store/action/jobs";

const JobDetail = (props) => {
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
    const { id } = props.match.params;
    dispatch(fetchJobsDetail());
  }, []);


  return (
    <></>
  );
};

export default JobDetail;
