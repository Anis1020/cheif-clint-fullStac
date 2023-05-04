import React from "react";
import bgImg from "../assets/bg-image.jpg";
import { useLoaderData } from "react-router-dom";
import SingleChef from "./SingleChef/SingleChef";
const Home = () => {
  const chef = useLoaderData();
  console.log(chef.chefs);

  return (
    <div>
      <div>
        <img className=" h-96 w-full object-cover py-8" src={bgImg} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 my-5 gap-4 ">
        {chef.chefs.map((singleChef) => (
          <SingleChef key={singleChef.id} singleChef={singleChef}></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default Home;
