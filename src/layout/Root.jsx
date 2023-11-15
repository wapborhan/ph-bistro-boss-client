import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./header/Navbar";
import Footer from "./footer/Footer";

const Root = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("signin") ||
    location.pathname.includes("signup");

  return (
    <>
      {isLogin || <NavBar />}
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      {isLogin || <Footer />}
    </>
  );
};

export default Root;
