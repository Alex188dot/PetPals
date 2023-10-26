import React from "react";
import "./FollowersCard.css";
import { FollowersData } from "../../data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {FollowersData.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img
                src={follower.img}
                alt="follower_img"
                className="followerImg"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
