import { Link } from "react-router-dom";

const SingleChef = ({ singleChef }) => {
  const { id, chefName, chefPicture, likes, numRecipes, yearsOfExperience } =
    singleChef;
  //   console.log(singleChef);

  return (
    <div>
      <div className="card  bg-slate-400 text-black shadow-2xl">
        <figure className="px-1 pt-1">
          <img src={chefPicture} alt="chef" className="rounded-xl h-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{chefName}</h2>
          <p>Chef Year of experience {yearsOfExperience}</p>
          <p>Number of recipe {numRecipes}</p>
          <p>Likes icon {likes}</p>
          <div className="card-actions">
            <Link to={`/${id}`}>
              {" "}
              <button className="btn btn-primary">Chef's Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
