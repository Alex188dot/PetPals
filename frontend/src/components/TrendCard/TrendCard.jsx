import React from "react";
import "./TrendCard.css";
import "../../data/TrendData";
import { TrendData } from "../../data/TrendData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend" key={trend.name}>
            <span>#{trend.name}</span>
            <span>{trend.shares} posts</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
