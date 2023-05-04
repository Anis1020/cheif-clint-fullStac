import "./App.css";
import { Outlet } from "react-router-dom";
import NaveBare from "./Components/NaveBare";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NaveBare></NaveBare>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
