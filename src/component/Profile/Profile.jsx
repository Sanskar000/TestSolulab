import React from "react";
import profileimg from "../../asset/images/profileimg.png";
import FileIcon from "../../asset/images/fileicon.svg";
import "./profile.css";

const Profile = () => {
  console.log(Array(1).fill(4));
  return (
    <div className="ProfileContainer">
      <div className="ProfileDiv">
        <div className="profile_info_wrapper">
          <div className="imageDiv">
            <img src={profileimg} />
          </div>
          <div className="text">Diane Cooper</div>
          <div className="mail">diane.cooper@gmail.com</div>
          <div className="followup wrapper">
            <div className="info_wrapper flex-column wrapper">
              <p className="info_number">15</p>
              <p className="info_label">Past</p>
            </div>
            <div className="divider" />
            <div className="info_wrapper wrapper flex-column">
              <p className="info_number">02</p>
              <p className="info_label">Upcoming</p>
            </div>
          </div>
          <button className="sendmessagebtn btn">Send Message </button>
        </div>
      </div>
      <div className="profile_info_wrapper">
        <h3 className="headingsection">Files / Documents</h3>
        <div className="wrapper flex-column ">
          {Array(4)
            .fill("0")
            .map(() => (
              <div className="files_wrapper  wrapper">
                <img src={FileIcon} />
                <div>
                  <p className="filename">Check Up Results.pdf</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
