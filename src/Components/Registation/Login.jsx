import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routers/AuthProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const { loginUser, createUserByGoogle, createUserByGithub } =
    useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log("wrig info", result.user);
      })
      .catch((error) => {
        setError("wrong information", error);
      });
  };

  const handleGoogleSignUp = () => {
    createUserByGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignUp = () => {
    createUserByGithub()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-2xl m-auto my-4">
      <p>{error}</p>
      <form onSubmit={handleLogin}>
        <div>
          <div className="my-4">
            <input
              type="email"
              name="email"
              placeholder="Type Email"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              name="password"
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
      <button
        onClick={handleGoogleSignUp}
        className="btn btn-outline flex gap-4 m-auto"
      >
        {" "}
        <FaGoogle></FaGoogle> SignUp by Google
      </button>{" "}
      <br />
      <button
        onClick={handleGithubSignUp}
        className="btn btn-outline flex gap-4 m-auto"
      >
        {" "}
        <FaGithub></FaGithub> SignUp by Github
      </button>
    </div>
  );
};

export default Login;
