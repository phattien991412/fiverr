import React from "react";
import Categories from "../../Components/Jobs/Category";
import Footer from "../../Components/Footer";
import HeaderJobs from "../../Components/Jobs/HeaderJobs";
import { useSelector } from "react-redux";
import Loading from "../../Components/LoadingScreen";
import Header from '../../Components/Header'

const Category = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <>
      <Header />
      <Categories />
      <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-8 bg-gray-200 text-center px-5 lg:px-0">
        <div className="lg:col-start-2 lg:col-span-2  mx-4 lg:py-4">
          <h5 className="text-xl pt-4 ">
            Your <b>Terms</b>
          </h5>
          <p className="lg:pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
        <div className=" lg:col-span-2  mx-4 lg:py-4">
          <h5 className="text-xl lg:pt-4 ">
            Your <b>Timeline</b>
          </h5>
          <p className="lg:pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
        <div className=" lg:col-span-2  mx-4 lg:py-4">
          <h5 className="text-xl lg:pt-4 ">
            Your <b>Safety</b>
          </h5>
          <p className="lg:pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
      </div>
      <Footer />
      {isLoading && <Loading />}
    </>
  );
};

export default Category;
