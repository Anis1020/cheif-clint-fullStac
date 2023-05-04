import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import img from "../../assets/bg-image.jpg";
import SingleChefDetail from "../SingleChefDetail/SingleChefDetail";

const ChefRecipe = () => {
  const [disable, setDisable] = useState(false);

  const Id = useParams();
  // console.log(typeof id);
  const chefDetails = useLoaderData();

  console.log(chefDetails);

  // useEffect(() => {
  //   const chefRecipe = chefDetails.find((ch) => ch._id === Id);
  //   setRecipe(chefRecipe);
  // }, []);
  // // const {} = recipe;
  // console.log(recipe);

  const handleFavorite = () => {
    setDisable(toast("Added in you Favorite list!"));
  };
  return (
    <div>
      <div className="card card-side bg-slate-300 text-black shadow-2xl">
        <figure className=" ">
          <img className="w-96 rounded" src={img} alt="img" />
        </figure>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card-body shadow-2xl bg-purple-600 mx-5 rounded">
            <h2 className="card-title">Panta Vat and alu vorta!</h2>
            <p>Click the button to watch on app.</p>
            <div className="card-actions ">
              <button className="btn btn-primary">Order Now</button>
              <span onClick={handleFavorite}>
                {!disable && (
                  <button className="btn btn-primary">Favorite </button>
                )}
                <ToastContainer />
              </span>
            </div>
          </div>
          <div className="card-body shadow-2xl bg-purple-600 mx-5 rounded">
            <h2 className="card-title">Dim khechuri!</h2>
            <p>Click the button to watch on app.</p>
            <div className="card-actions ">
              <button className="btn btn-primary">Order Now</button>
              <span onClick={handleFavorite}>
                <button className="btn btn-primary">Favorite </button>{" "}
                <ToastContainer />
              </span>
            </div>
          </div>
          <div className="card-body shadow-2xl bg-purple-600 mx-5 rounded">
            <h2 className="card-title">Daul Vat with vorta!</h2>
            <p>Click the button to watch on app.</p>
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
            <p>Click the button to watch on app.</p>
            <div className="card-actions ">
              <button className="btn btn-primary">Order Now</button>
              <span onClick={handleFavorite}>
                <button className="btn btn-primary">Favorite </button>{" "}
                <ToastContainer />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* {chefDetails.chefs.map((cDetails) => (
          <SingleChefDetail cDetails={cDetails}></SingleChefDetail>
        ))} */}
      </div>
    </div>
  );
};

export default ChefRecipe;
