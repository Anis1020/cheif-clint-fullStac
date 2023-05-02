import React from "react";
import { Link } from "react-router-dom";

const Registation = () => {
  return (
    <>
      <form>
        <div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Type Name"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div className="my-4">
            <input
              type="email"
              placeholder="Type Email"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              placeholder="Type Password"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Type Photo URL"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <button className="btn btn-warning my-4">Register</button>
          <p>
            <span>
              Already have an accout?{" "}
              <Link className="btn btn-link" to="/login">
                Please Login
              </Link>{" "}
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Registation;
