import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleChefDetail = ({ chefDetails }) => {
  console.log();
  const [disable, setDisable] = useState(false);

  const handleFavorite = () => {
    setDisable(toast("Added in you Favorite list!"));
  };
  return (
    <div className="grid gap-4">
      <div className="card-body shadow-2xl bg-purple-600 mx-5 rounded">
        <h2 className="card-title">Dim khechuri!</h2>
        <p>some info comming soon</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Order Now</button>
          <span onClick={handleFavorite}>
            <button className="btn btn-primary">Favorite </button>{" "}
            <ToastContainer />
          </span>
        </div>
      </div>
      <div className="card-body shadow-2xl bg-purple-600 mx-5 rounded">
        <h2 className="card-title">asd</h2>
        <p>some information comming soon</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Order Now</button>
          <span onClick={handleFavorite}>
            {!disable && <button className="btn btn-primary">Favorite </button>}
            <ToastContainer />
          </span>
        </div>
      </div>
      <div className="card-body shadow-2xl bg-purple-600 mx-5 rounded">
        <h2 className="card-title">Daul Vat with vorta!</h2>
        <p>some information comming soon</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Order Now</button>
          <span onClick={handleFavorite}>
            <button className="btn btn-primary">Favorite </button>{" "}
            <ToastContainer />
          </span>
        </div>
      </div>{" "}
      <div className="card-body shadow-2xl bg-purple-600 mx-5 rounded">
        <h2 className="card-title">New movie is released!</h2>
        <p>some information comming soon</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Order Now</button>
          <span onClick={handleFavorite}>
            <button className="btn btn-primary">Favorite </button>{" "}
            <ToastContainer />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleChefDetail;
