import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Login from "../Components/Registation/Login";
import Registation from "../Components/Registation/Registation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registation></Registation>,
      },
    ],
  },
]);

export default router;
