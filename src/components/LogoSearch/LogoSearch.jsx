import React from "react";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
import Logo from "../Logo/Logo";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Logo />
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
