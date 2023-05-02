import React from "react";
import { Link } from "react-router-dom";

const NaveBare = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Bangla Food</a>
        </div>
        <div className="flex-none">
          <nav className="flex">
            <Link className="mr-5" to="/">
              Home
            </Link>
            <Link className="mr-5" to="/blog">
              Blog
            </Link>
            <Link className="mr-5" to="/login">
              Login
            </Link>
            <Link className="mr-5" to="/register">
              Register
            </Link>
          </nav>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaveBare;
<Link>Home</Link>;
<Link>Login</Link>;
<Link>Register</Link>;
