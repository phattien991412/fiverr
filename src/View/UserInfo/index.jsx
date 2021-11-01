import React from "react";
import HeaderJobs from "../../Components/Jobs/HeaderJobs";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const me = useSelector((state) => state.user.me);
  return (
    <>
      <HeaderJobs />
      <div className="grid grid-cols-5 bg-gray-200 pt-10 pb-20">
        <div className="col-start-2 font-sans w-full ">
          <div className="card w-full mx-auto bg-white  shadow-xl hover:shadow">
            <img
              className="w-32 mx-auto rounded-full  border-8 border-white"
              src="https://avatars.githubusercontent.com/u/67946056?v=4"
              alt
            />
            <div className="text-center mt-2 text-xl font-medium">
              {me?.name}
            </div>
            <div className="text-center mt-2 font-light text-sm">
              {me?.email}
            </div>
            <div className="text-center font-light text-sm">{me?.phone}</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
              <p>
                Front end Developer, avid reader. Love to take a long walk, swim
              </p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="flex p-4">
              <div className="w-1/2 text-center">
                <span className="font-bold">1.8 k</span> Followers
              </div>
              <div className="w-0 border border-gray-300"></div>
              <div className="w-1/2 text-center">
                <span className="font-bold">2.0 k</span> Following
              </div>
            </div>
          </div>

          <div className="card w-full mx-auto mt-10 bg-white  shadow-xl hover:shadow">
            <div className="grid grid-cols-2 text-center pt-5">
              <h4>Description</h4>
              <p>Edit Description</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4>Language</h4>
              <p>Add Now</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4>Description</h4>
              <p>Edit Description</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4>Description</h4>
              <p>Edit Description</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4>Description</h4>
              <p>Edit Description</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4>Description</h4>
              <p>Edit Description</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
          </div>
        </div>

        <div className="col-span-2 ml-10">
          <div className="card w-full mx-auto bg-white  shadow-xl hover:shadow">
            <div className="grid grid-cols-2 text-center pt-5">
              <h4>Description</h4>
              <p>Edit Description</p>
            </div>

            <hr className="mt-8 w-4/5 text-center mx-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInfo;
