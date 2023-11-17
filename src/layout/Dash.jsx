import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import DashNav from "./dash-nav/DashNav";

const Dash = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <SideBar />
      {/* dashboard content */}
      <div className="flex-1">
        <DashNav />
        <div className="p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dash;
