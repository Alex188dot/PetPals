import React, { useState } from "react";
import "./Home.css";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = ({ theme, toggleTheme }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (value) => {
    setKeyword(value);
  };

  return (
    <div className="Home">
      <ProfileSide handleSearch={handleSearch} />
      <PostSide keyword={keyword} />
      <RightSide theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Home;
