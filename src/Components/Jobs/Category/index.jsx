import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchSubTypeJobs, fetchTestApi } from "../../../store/action/jobs";

const Categories = () => {
  //   const listJobs = useSelector((state) => state.jobs.listJobs);
  const subType = useSelector((state) => state.jobs.subTypeJobs);
  const dispatch = useDispatch();

  useEffect((_id) => {
    dispatch(fetchSubTypeJobs(_id))
  }, [])

  return (
    <div className="ml-4 xl:ml-0 xl:container">
      <div className="text-center mb-10 mx-9">
        <h1 className="text-3xl font-bold mt-5 mb-0">Program & Tech</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
          laboriosam.
        </p>
      </div>
      <div className="xl:container xl:grid xl:grid-cols-6">
        <div className="col-start-1 col-span-2 ml-24 hidden xl:block">
          <h1 className="text-lg font-semibold">Program & Tech</h1>
          <ul>
            {subType?.map((item) => {
              return (
                <li className="mb-3">
                  <NavLink
                    to="/categories/jobs"
                    className="text-base text-gray-500 hover:text-gray-500"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="xl:col-start-3 xl:col-span-4">
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <div className="col-span-1 -mb-6 h-48 md:h-80">
              <NavLink to="/categories/jobs">
                <img
                  className="w-full h-3/5 pr-4 rounded"
                  src="https://picsum.photos/200"
                  alt=""
                />
                <p className="text-base font-medium text-black hover:text-black mb-0">
                  WordPress
                </p>
              </NavLink>
            </div>
            <div className="col-span-1 -mb-6 h-48 md:h-80">
              <NavLink to="/categories/jobs">
                <img
                  className="w-full h-3/5 pr-4 rounded"
                  src="https://picsum.photos/200"
                  alt=""
                />
                <p className="text-base font-medium text-black hover:text-black mb-0">
                  WordPress
                </p>
              </NavLink>
            </div>
            <div className="col-span-1 -mb-6 h-48 md:h-80">
              <NavLink to="/categories/jobs">
                <img
                  className="w-full h-3/5 pr-4 rounded"
                  src="https://picsum.photos/200"
                  alt=""
                />
                <p className="text-base font-medium text-black hover:text-black mb-0">
                  WordPress
                </p>
              </NavLink>
            </div>
            <div className="col-span-1 -mb-6 h-48 md:h-80">
              <NavLink to="/categories/jobs">
                <img
                  className="w-full h-3/5 pr-4 rounded"
                  src="https://picsum.photos/200"
                  alt=""
                />
                <p className="text-base font-medium text-black hover:text-black mb-0">
                  WordPress
                </p>
              </NavLink>
            </div>
            <div className="col-span-1 -mb-6 h-48 md:h-80">
              <NavLink to="/categories/jobs">
                <img
                  className="w-full h-3/5 pr-4 rounded"
                  src="https://picsum.photos/200"
                  alt=""
                />
                <p className="text-base font-medium text-black hover:text-black mb-0">
                  WordPress
                </p>
              </NavLink>
            </div>
            <div className="col-span-1 -mb-6 h-48 md:h-80">
              <NavLink to="/categories/jobs">
                <img
                  className="w-full h-3/5 pr-4 rounded"
                  src="https://picsum.photos/200"
                  alt=""
                />
                <p className="text-base font-medium text-black hover:text-black mb-0">
                  WordPress
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
