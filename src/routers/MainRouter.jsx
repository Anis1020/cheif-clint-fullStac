import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Login from "../Components/Registation/Login";
import Registation from "../Components/Registation/Registation";
import Footer from "../Components/Footer";
import Blog from "../Blog";
import ErrorPage from "../Components/ErrorPage";
import ChefRecipe from "../Components/ChefRecipe/ChefRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-server-site-anis1020.vercel.app/chef"),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registation></Registation>,
      },
      {
        path: "/:id",
        element: <ChefRecipe></ChefRecipe>,
        loader: () =>
          fetch("https://assignment-10-server-site-anis1020.vercel.app/chef"),
      },
    ],
  },
]);

export default router;
