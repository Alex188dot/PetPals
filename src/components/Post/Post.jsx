import React, { useState, useEffect } from "react";
import "./Post.css";
import Heart from "../../img/heart.svg";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostsRequest";
import { Image } from "cloudinary-react";
import { getUser } from "../../api/UserRequest";
import { UilHeart } from "@iconscout/react-unicons";
import { UilCommentDots, UilShare } from "@iconscout/react-unicons";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [fullname, setFullname] = useState("");

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  useEffect(() => {
    let isMounted = true;

    const fetchFullName = async () => {
      try {
        const response = await getUser(data.userId);
        const { firstName, lastName } = response.data;
        if (isMounted) {
          setFullname(`${firstName} ${lastName}`);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (data.userId) {
      fetchFullName();
    }

    return () => {
      isMounted = false;
    };
  }, [data.userId]);

  const handleLike = () => {
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    likePost(data._id, user._id);
  };

  return (
    <div className="Post">
      <div className="img_container">
        <Image
          cloudName="dufov2soa"
          className="postImage"
          publicId={data.image}
          alt={data.image ? "post-image" : ""}
        />
      </div>
      <div className="detail desc">
        <div className="fullname">
          <b>{fullname}</b>
        </div>
        <br />
        <span> {data.desc}</span>
      </div>
      <div className="postReactions desc">
        {liked ? (
          <img
            src={Heart}
            alt="heart-icon"
            style={{ cursor: "pointer" }}
            onClick={handleLike}
          />
        ) : (
          <UilHeart style={{ cursor: "pointer" }} onClick={handleLike} />
        )}
        <UilCommentDots />
        <UilShare />
      </div>
      <span className="desc likes_num">{likes} likes</span>
    </div>
  );
};

export default Post;
