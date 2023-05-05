import { useLoaderData, useParams } from "react-router-dom";

import SingleChefDetail from "../SingleChefDetail/SingleChefDetail";

const ChefRecipe = () => {
  const Id = useParams();
  // console.log(typeof id);
  const chefDetails = useLoaderData();
  const { chefName, bio, chefPicture, likes, numRecipes, yearsOfExperience } =
    chefDetails;
  console.log(chefDetails);

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl m-auto text-center">
        <figure>
          <img src={chefPicture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p>Bio {bio}</p>
          <p>Number of recipe {numRecipes}</p>
          <p>Work experience {yearsOfExperience}</p>
        </div>
      </div>

      <div className="">
        <SingleChefDetail chefDetails={chefDetails}></SingleChefDetail>
        <h2>comming soon</h2>
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
