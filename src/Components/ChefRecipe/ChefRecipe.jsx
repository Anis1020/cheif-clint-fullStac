import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import img from "../../assets/error-img.jpg";

const ChefRecipe = () => {
  const id = useParams();
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  const { chefPicture, recipes } = chefDetails;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
