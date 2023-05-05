import bgImg from "../assets/bg-image.jpg";
import { useLoaderData } from "react-router-dom";
import SingleChef from "./SingleChef/SingleChef";
import { useContext } from "react";
import { AuthContext } from "../routers/AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const chef = useLoaderData();
  // console.log(chef);
  // console.log(chef.chefs);
  if (loading) {
    return <progress className="progress bg-red-600 w-56"></progress>;
  }
  return (
    <div>
      <div>
        <img className=" h-96 w-full object-cover py-8" src={bgImg} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 my-5 gap-4 ">
        {chef.map((singleChef) => (
          <SingleChef key={singleChef.id} singleChef={singleChef}></SingleChef>
        ))}
      </div>
      {/* extra sections on the home page. */}
      <div
        className="flex px-5 gap-5 justify-between items-center
       my-4 shadow-2xl bg-slate-300 text-black rounded text-2xl py-5"
      >
        <div className="bg-red-400 rounded p-5 pt-24 pb-20">
          <p>Contract Us</p>
          <form>
            <input
              type="text"
              placeholder="Type Email"
              className="input input-bordered input-secondary w-full max-w-xs"
            />{" "}
            <br /> <br />
            <textarea
              className="textarea textarea-secondary"
              placeholder="Your Message"
              cols={42}
            ></textarea>
            <br />
            <button className="btn btn-accent w-52">Send</button>
          </form>
        </div>
        <div className="w-7/12 bg-red-400 rounded p-5">
          <p>About Us</p>
          <small>
            <ol>
              <li>
                we are commited to serve the best food of bangali so you can
                take any food from our list
              </li>
              <li>
                we are commited to serve the best food of bangali so you can
                take any food from our list
              </li>
              <li>
                we are commited to serve the best food of bangali so you can
                take any food from our list
              </li>
              <li>
                we are commited to serve the best food of bangali so you can
                take any food from our list
              </li>
              <li>
                we are commited to serve the best food of bangali so you can
                take any food from our list
              </li>
            </ol>
            .
          </small>
        </div>
      </div>
      {/* //extra section added */}
      <h1 className="text-2xl bg-cyan-600 rounded"> Review</h1>
      <div className="grid lg:grid-cols-3 gap-4 text-start mb-5 mt-1  text-black">
        <div className="shadow-2xl bg-cyan-600 gap-4  p-5 rounded ">
          <img src={bgImg} className="w-16 rounded-full" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            consequuntur temporibus veritatis tempore sequi eveniet corrupti
            expedita, sunt iure accusamus?
          </p>
          <h1 className="text-2xl">josim</h1>
        </div>{" "}
        <div className="shadow-2xl bg-cyan-600 gap-4  p-5 rounded ">
          <img src={bgImg} className="w-16 rounded-full" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            consequuntur temporibus veritatis tempore sequi eveniet corrupti
            expedita, sunt iure accusamus?
          </p>
          <h1 className="text-2xl">josim</h1>
        </div>
        <div className="shadow-2xl bg-cyan-600 gap-4  p-5 ">
          <img src={bgImg} className="w-16 rounded-full" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            consequuntur temporibus veritatis tempore sequi eveniet corrupti
            expedita, sunt iure accusamus?
          </p>
          <h1 className="text-2xl">josim</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
