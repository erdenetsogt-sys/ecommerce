import React from "react";
import "./NewsLetter.css";
export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offer your email</h1>
      <p>Subscribe to stay update</p>
      <div>
        <input type="email" placeholder="email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
