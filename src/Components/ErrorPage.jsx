import React from "react";
import error from "../assets/error-img.jpg";
const ErrorPage = () => {
  return (
    <>
      <div className="bg-red-400 p-16 rounded text-white text-2xl">
        <img className="m-auto rounded" src={error} alt="" />
        <h1>Invalid URL Please Search again </h1>
      </div>
    </>
  );
};

export default ErrorPage;
