import React, { useState, useEffect } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostsRequest";
import { Image } from "cloudinary-react";
import { getUser } from "../../api/UserRequest";

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
          alt="post-image"
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
        <img
          src={liked ? Heart : NotLike}
          alt="heart-icon"
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="comment-icon" />
        <img src={Share} alt="share-icon" />
      </div>
      <span
        className="desc"
        style={{ color: "var(--gray)", fontSize: "0.8rem" }}
      >
        {likes} likes
      </span>
    </div>
  );
};

export default Post;
