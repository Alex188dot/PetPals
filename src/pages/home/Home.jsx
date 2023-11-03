import React, { useState } from "react";
import "./Home.css";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (value) => {
    setKeyword(value);
  };

  return (
    <div className="Home">
      <ProfileSide handleSearch={handleSearch} />
      <PostSide keyword={keyword} />
      <RightSide />
    </div>
  );
};

export default Home;
