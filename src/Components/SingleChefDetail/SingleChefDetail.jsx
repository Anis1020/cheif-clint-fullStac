import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleChefDetail = ({ recipe }) => {
  console.log(recipe);
  const [disable, setDisable] = useState(false);

  const { recipeImg, name, cookingMethod, ingredients, rating } = recipe;

  const handleFavorite = () => {
    setDisable(toast("Added in you Favorite list!"));
  };
  return (
    <div className="">
      {/* card start */}
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src={recipeImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>CookingMethod: {cookingMethod}:</p>
          {ingredients.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
          <div className="card-actions ">
            <button className="btn btn-primary">Order Now</button>
            {!disable && (
              <span onClick={handleFavorite}>
                <button className="btn btn-primary">Favorite </button>{" "}
                <ToastContainer />
              </span>
            )}
          </div>
          <p>Rating: {rating}</p>
        </div>
      </div>
      {/* card end */}
    </div>
  );
};

export default SingleChefDetail;
