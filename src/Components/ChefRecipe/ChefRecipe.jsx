import { useLoaderData, useParams } from "react-router-dom";

import SingleChefDetail from "../SingleChefDetail/SingleChefDetail";

const ChefRecipe = () => {
  const Id = useParams();
  // console.log(typeof id);
  const chefDetails = useLoaderData();
  const {
    chefName,
    bio,
    chefPicture,
    likes,
    recipes,
    numRecipes,
    yearsOfExperience,
  } = chefDetails;
  console.log(chefDetails);

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl m-auto text-center">
        <figure>
          <img className="rounded" src={chefPicture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p>Bio {bio}</p>
          <p>Number of recipe: {numRecipes}</p>
          <p>Work experience: {yearsOfExperience} Years</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 ">
        {recipes.map((recipe) => (
          <SingleChefDetail recipe={recipe}></SingleChefDetail>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipe;
