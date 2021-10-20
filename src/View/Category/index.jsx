import React from "react";
import Categories from "../../Components/Jobs/Category";
import Footer from "../../Components/Footer";
import HeaderJobs from "../../Components/Jobs/HeaderJobs";
import { useSelector } from "react-redux";
import Loading from "../../Components/LoadingScreen";

const Category = () => {
  const isLoading = useSelector((state) => state.loading.isLoading)
  return (
    <>
      <HeaderJobs />
      <Categories />
      <div className="grid grid-cols-8 bg-gray-200 text-center">
        <div className="col-start-2 col-span-2  mx-4 py-4">
          <h5 className="text-xl pt-4 ">
            Your <b>Terms</b>
          </h5>
          <p className="pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
        <div className="col-span-2  mx-4 py-4">
          <h5 className="text-xl pt-4 ">
            Your <b>Timeline</b>
          </h5>
          <p className="pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
        <div className="col-span-2  mx-4 py-4">
          <h5 className="text-xl pt-4 ">
            Your <b>Safety</b>
          </h5>
          <p className="pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
      </div>
      <Footer />
      {isLoading && <Loading/>}
    </>
  );
};

export default Category;
