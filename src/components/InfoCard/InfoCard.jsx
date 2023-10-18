import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your info</h4>
        <div>
          <UilPen width="2rem" height="1.1rem" />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Pet: </b>
        </span>
        <span>Dog</span>
      </div>
      <div className="info">
        <span>
          <b>From: </b>
        </span>
        <span>Boston</span>
      </div>
      <div className="info">
        <span>
          <b>Member since: </b>
        </span>
        <span>2019</span>
      </div>
      <div className="btn-container">
        <button className="button logout-button">Logout</button>
      </div>
    </div>
  );
};

export default InfoCard;
