import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form>
        <div>
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

          <button className="btn btn-warning my-4">Login</button>
          <p>
            <span>
              New to this website??{" "}
              <Link className="btn btn-link" to="/register">
                Please Register
              </Link>{" "}
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
