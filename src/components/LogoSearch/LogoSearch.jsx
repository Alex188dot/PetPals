import React from "react";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="/">
        <Logo style={{ fontSize: "2rem" }} />
      </Link>
      <div className="Search">
        <input type="text" placeholder="Search" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
