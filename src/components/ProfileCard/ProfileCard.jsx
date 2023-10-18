import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" className="" />
        <img src={Profile} alt="" className="" />
      </div>
      <div className="ProfileName">
        <span>Harvey Dunn</span>
        <span>Dog lover</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>879</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1267</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  );
}
