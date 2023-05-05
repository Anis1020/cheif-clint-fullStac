import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../routers/AuthProvider";
import ActiveLink from "./ActiveLink/ActiveLink";

const NaveBare = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Chef of Burger</a>
        </div>
        <div className="flex-none">
          <nav className="flex mr-5 gap-5">
            <ActiveLink className="mr-5" to="/">
              Home
            </ActiveLink>
            <ActiveLink className="mr-5" to="/blog">
              Blog
            </ActiveLink>

            <ActiveLink className="mr-5" to="/register">
              Register
            </ActiveLink>
            {user ? (
              <>
                <span>{user.email}</span>
                <button onClick={handleLogOut} className="btn btn-link">
                  LogOut
                </button>
              </>
            ) : (
              <ActiveLink className="mr-5" to="/login">
                Login
              </ActiveLink>
            )}
          </nav>

          <div className="dropdown dropdown-end">
            {user && (
              <div className="w-10 rounded-full btn btn-outline btn-circle avatar">
                <img
                  className="rounded-full"
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            )}
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
