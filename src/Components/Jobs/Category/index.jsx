import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchTestApi } from "../../../store/action/jobs";

const Categories = () => {
  //   const listJobs = useSelector((state) => state.jobs.listJobs);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Program & Tech</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
          laboriosam.
        </p>
      </div>
      <div className="container grid grid-cols-6">
        <div className="col-start-1 col-span-2 ml-24">
          <h1>Program & Tech</h1>
          <ul>
            <li>
              <NavLink to="/categories/jobs" className="text-black hover:text-black">
                Lorem ipsum dolor sit amet.
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/jobs" className="text-black hover:text-black">
                Lorem ipsum dolor sit amet.
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/jobs" className="text-black hover:text-black">
                Lorem ipsum dolor sit amet.
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/jobs" className="text-black hover:text-black">
                Lorem ipsum dolor sit amet.
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/jobs" className="text-black hover:text-black">
                Lorem ipsum dolor sit amet.
              </NavLink>
            </li>

          </ul>
        </div>
        <div className="col-start-3 col-span-4">
          <div className="grid grid-cols-3">
            <div className="col-span-1 mb-8">
              <NavLink to="/categories/jobs"><img className="w-full pr-4 rounded" src="https://picsum.photos/200" alt="" />
              <p className="text-base font-medium text-black hover:text-black">WordPress</p></NavLink>
            </div>
            <div className="col-span-1 mb-8">
              <NavLink to="/categories/jobs"><img className="w-full pr-4 rounded" src="https://picsum.photos/200" alt="" />
              <p className="text-base font-medium text-black hover:text-black">WordPress</p></NavLink>
            </div>
            <div className="col-span-1 mb-8">
              <NavLink to="/categories/jobs"><img className="w-full pr-4 rounded" src="https://picsum.photos/200" alt="" />
              <p className="text-base font-medium text-black hover:text-black">WordPress</p></NavLink>
            </div>
            <div className="col-span-1 mb-8">
              <NavLink to="/categories/jobs"><img className="w-full pr-4 rounded" src="https://picsum.photos/200" alt="" />
              <p className="text-base font-medium text-black hover:text-black">WordPress</p></NavLink>
            </div>
            <div className="col-span-1 mb-8">
              <NavLink to="/categories/jobs"><img className="w-full pr-4 rounded" src="https://picsum.photos/200" alt="" />
              <p className="text-base font-medium text-black hover:text-black">WordPress</p></NavLink>
            </div>
            <div className="col-span-1 mb-8">
              <NavLink to="/categories/jobs"><img className="w-full pr-4 rounded" src="https://picsum.photos/200" alt="" />
              <p className="text-base font-medium text-black hover:text-black">WordPress</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
