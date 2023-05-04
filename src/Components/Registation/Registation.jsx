import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../routers/AuthProvider";

const Registation = () => {
  const { createUser } = useContext(AuthContext);
  const [mismes, setMismes] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    //Minimum eight characters, at least one letter, one number and one special character
    if (
      /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/.test(
        password
      )
    ) {
      setMismes("successfully created");
      return;
    } else {
      setMismes(
        "Minimum eight characters, at least one letter, one number and one special character"
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset = "";
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-2xl m-auto my-4">
      <p>{mismes}</p>
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
              required
              className="input input-bordered input-success w-full max-w-xs"
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              name="password"
              required
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

      <p>
        <span>
          Already have an account?{" "}
          <Link className="btn btn-link" to="/login">
            Please Login
          </Link>{" "}
        </span>
      </p>
    </div>
  );
};

export default Registation;
