import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "antd";
import { Card, Avatar } from "antd";


import { fetchListJobs } from "../../../store/action/jobs";
import ItemJobs from "../ItemJobs";

const { Meta } = Card;

const ListJobs = () => {
  const dispatch = useDispatch();
  const listJobs = useSelector((state) => state.jobs.listJobs);
  useEffect(() => {
    dispatch(fetchListJobs());
  }, []);

 

  return (
    <div className="container border-b pb-20 mt-20">
      <h1 className="mb-10 text-2xl">Results for "HTML"</h1>
      <div className="grid grid-cols-4">
        {listJobs.map((item) => {
          return (
            <div key={item._id} className="col-span-1">
              <ItemJobs  item={item} />
            </div>
          );
        })}
      </div>
      <Pagination pageSize={4}  className="text-center " defaultCurrent={1} total={listJobs.length} />
    </div>
  );
};

export default ListJobs;
