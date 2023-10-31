import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../actions/UserAction";

const User = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleFollow = async () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
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
      <button className="button fc-button" onClick={handleFollow}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
