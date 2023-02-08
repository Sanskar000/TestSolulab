import React from "react";
import loGo from "../asset/images/logo.png";
import plus from "../asset/images/plus.png";
import folder from "../asset/images/folder.png";
import contact from "../asset/images/contact.png";
import logout from "../asset/images/logout.png";
import report from "../asset/images/report.png";
import setting from "../asset/images/setting.png";
import upload from "../asset/images/upload.png";

const SideBar = () => {
  return (
    <div className="navbar">
      <div className="snb">
        <div className="logo1">
          <img className="lpng" src={loGo} />
        </div>
        <div className="logo wrapper flex-column">
          <img className="lpng" src={plus} />
          <p className="sidebar_para"> plus</p>
        </div>
        <div className="logo wrapper flex-column">
          <img className="lpng" src={contact} />
          <p className="sidebar_para"> patient</p>
        </div>
        <div className="logo wrapper flex-column">
          <img className="lpng" src={folder} />
          <p className="sidebar_para"> folder</p>
        </div>
        <div className="logo wrapper flex-column">
          <img className="lpng" src={upload} />
          <p className="sidebar_para"> upload</p>
        </div>
        <div className="logo wrapper flex-column">
          <img className="lpng" src={report} />
          <p className="sidebar_para"> report</p>
        </div>
        <div className="logo wrapper flex-column">
          <img className="lpng" src={setting} />
          <p className="sidebar_para"> setting</p>
        </div>
        <div className="logo wrapper flex-column">
          <img className="lpng" src={logout} />
          <p className="sidebar_para"> logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
