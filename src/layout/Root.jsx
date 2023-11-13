import { Outlet } from "react-router-dom";
import NavBar from "./header/Navbar";
import Footer from "./footer/Footer";

const Root = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
