import React from "react";
import bgImg from "../assets/bg-image.jpg";
const Home = () => {
  return (
    <div>
      <div>
        <img className=" h-96 w-full object-cover py-8" src={bgImg} alt="" />
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Chef Name!</h2>
            <p>Chef Year of experience</p>
            <p>Number of recipe</p>
            <p>Chef Likes</p>
            <div className="card-actions">
              <button className="btn btn-primary">View Detail recipe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
