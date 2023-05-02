import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routers/AuthProvider";

const Registation = () => {
  const { createUser, createUserByGoogle } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        // ..
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
  return (
    <>
      <form onSubmit={handleRegister}>
        <div>
          <div className="my-4">
            <input
              type="text"
              name="name"
              placeholder="Type Name"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
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
          <div className="my-4">
            <input
              type="text"
              name="photo"
              placeholder="Type Photo URL"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <button className="btn btn-warning my-4">Register</button> <br />
        </div>
      </form>
      <button
        onClick={handleGoogleSignUp}
        className="btn btn-primary flex gap-4 m-auto"
      >
        {" "}
        <FaGoogle></FaGoogle> SignUp by Google
      </button>
      <p>
        <span>
          Already have an accout?{" "}
          <Link className="btn btn-link" to="/login">
            Please Login
          </Link>{" "}
        </span>
      </p>
    </>
  );
};

export default Registation;
