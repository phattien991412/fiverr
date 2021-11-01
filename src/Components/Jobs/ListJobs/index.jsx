import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "antd";
import { Card, Avatar } from "antd";
// import Pagination from "react-js-pagination";

import { fetchListJobs } from "../../../store/action/jobs";
import ItemJobs from "../ItemJobs";

const ListJobs = () => {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const listJobs = useSelector((state) => state.jobs.listJobs);

  const count = 4;
  const [pageSize, setPageSize] = useState({
    data: listJobs,
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0
  });

  useEffect(() => {
    dispatch(
      fetchListJobs((data) => {
        setPageSize({
          data,
          totalPage: data.length / count,
          current: 1,
          minIndex: 0,
          maxIndex: count
        });
      })
    );
  }, [dispatch, setPageSize]);

  const handleChange = useCallback(
    (page) => {
      setPageSize({
        current: page,
        minIndex: (page - 1) * count,
        maxIndex: page * count
      });
    },
    [setPageSize]
  );

  const { data } = pageSize;
  return (
    <div className="mx-12 xl:mx-0 xl:container border-b pb-10 mt-10 xl:pb-20 xl:mt-20">
      <h1 className="mb-10 text-2xl">Results for "HTML"</h1>
      <div className="grid grid-cols-1 mb-6 md:grid-cols-2 xl:grid-cols-4">
        {listJobs.map((item, index) => {
          return (
            index >= pageSize.minIndex &&
            index < pageSize.maxIndex && (
              <div key={item._id} className="col-span-1">
                <ItemJobs item={item} />
              </div>
            )
          );
        })}
      </div>

      <Pagination
        onChange={handleChange}
        pageSize={count}
        current={pageSize.current}
        total={10}
        className="text-center"
      />
    </div>
  );
};

export default ListJobs;
