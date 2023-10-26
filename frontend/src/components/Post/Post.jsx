import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <div className="img_container">
        <img className="postImage" src={data.img} alt="post_image" />
      </div>
      <div className="postReactions desc">
        <img src={data.liked ? Heart : NotLike} alt="heart-icon" />
        <img src={Comment} alt="comment-icon" />
        <img src={Share} alt="share-icon" />
      </div>
      <span
        className="desc"
        style={{ color: "var(--gray)", fontSize: "0.8rem" }}
      >
        {data.likes} likes
      </span>
      <div className="detail desc">
        <div className="fullname">
          <b>{data.name}</b>
        </div>
        <br />
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
