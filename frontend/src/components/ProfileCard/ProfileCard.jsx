import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export default function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <Image
          className="CoverPic"
          cloudName="dufov2soa"
          publicId={
            user.coverPicture ? user.coverPicture : "ikeiplb7zpfmpjbqoa64"
          }
          alt="cover_picture"
        />
        <Image
          className="ProfilePic"
          cloudName="dufov2soa"
          publicId={
            user.profilePicture ? user.profilePicture : "defaultProfile_qu4khz"
          }
          alt="profile-picture"
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.firstName} {user.lastName}
        </span>
        <span>{user.about || ""}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Profile
          </Link>
        </span>
      )}
    </div>
  );
}
