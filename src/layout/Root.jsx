import { Outlet } from "react-router-dom";
import NavBar from "./header/Navbar";
import Footer from "./footer/Footer";

const Root = () => {
  return (
    <>
      <NavBar />
      <div className="py-10"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
