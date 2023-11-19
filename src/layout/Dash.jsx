import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import DashNav from "./dash-nav/DashNav";

const Dash = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col">
      {/* dashboard side bar */}
      <SideBar />
      {/* dashboard content */}
      <div className="flex-1">
        <DashNav />
        <div className="px-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dash;
