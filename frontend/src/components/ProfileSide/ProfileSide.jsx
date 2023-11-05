import React from "react";
import "./ProfileSide.css";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";

const ProfileSide = ({ handleSearch }) => {
  return (
    <div className="ProfileSide">
      <LogoSearch handleSearch={handleSearch} />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
