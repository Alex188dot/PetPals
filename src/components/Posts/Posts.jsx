import React, { useEffect } from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/postAction";
import { useParams } from "react-router-dom";

const Posts = ({ keyword }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "No posts to show";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

  if (keyword) {
    posts = posts.filter((post) =>
      post.desc.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post key={id} data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
