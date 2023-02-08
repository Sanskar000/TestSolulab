import React from "react";
import MoreDeatilSection from "../component/MoreDetailSection/MoreDeatilSection";
import Profile from "../component/Profile/Profile";
import SideBar from "../component/SideBar";

const Layout = () => {
  return (
    <div className="row">
      <SideBar />

      <div className="col-3 p-0">
        <Profile />
      </div>
      <div className="col-7 p-0">
        <MoreDeatilSection />
      </div>
    </div>
  );
};

export default Layout;
