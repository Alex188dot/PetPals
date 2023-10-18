import React from "react";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <div className="paw-logo-container">
        <span class="material-symbols-outlined paw-logo">pets</span>
      </div>
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
