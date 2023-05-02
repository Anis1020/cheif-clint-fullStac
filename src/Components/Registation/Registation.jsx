import React from "react";
import { Link } from "react-router-dom";

const Registation = () => {
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <div>
            <label htmlFor="photo">Photo</label>
            <input type="text" name="photo" id="" />
          </div>
          <button>Register</button>
          <span>
            Already have an accout? <Link to="/login">Please Login</Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Registation;
