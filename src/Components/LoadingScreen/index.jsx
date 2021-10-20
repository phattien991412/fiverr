import React, { useEffect } from "react";
import loadingImg from "../../assets/img/Spinner-1s-200px.svg";

const Loading = () => {
  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <div className="grid grid-cols-3 ">
      <img
        className="col-start-2 mx-auto w-full mt-28"
        src={loadingImg}
        alt="loading"
      />
    </div>
  );
};

export default Loading;
