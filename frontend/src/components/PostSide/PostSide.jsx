import React from "react";
import "./PostSide.css";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

const PostSide = ({ keyword }) => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts keyword={keyword} />
    </div>
  );
};

export default PostSide;
