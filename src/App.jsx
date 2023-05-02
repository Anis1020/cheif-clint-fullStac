import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registation from "./Components/Registation/Registation";
import { Outlet } from "react-router-dom";
import NaveBare from "./Components/NaveBare";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NaveBare></NaveBare>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
