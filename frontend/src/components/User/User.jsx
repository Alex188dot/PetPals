import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const User = ({ person }) => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="follower_img"
          className="followerImg"
        />
        <div className="name">
          <span>
            {person.firstName} {person.lastName}
          </span>
        </div>
      </div>
      <button className="button fc-button">Follow</button>
    </div>
  );
};

export default User;
