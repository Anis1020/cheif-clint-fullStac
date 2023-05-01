import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registation from "./Components/Registation/Registation";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Registation></Registation>
      <Outlet></Outlet>
    </>
  );
}

export default App;
