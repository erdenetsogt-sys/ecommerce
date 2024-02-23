import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews{122}</div>
      </div>
      <div className="descriptionbox-description">
        <p>This is very good product. Hoping to purchase more ...</p>
        <p>Very good one</p>
      </div>
    </div>
  );
};
