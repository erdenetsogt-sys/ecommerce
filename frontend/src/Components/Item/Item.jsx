import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
export const Item = ({ name, id, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0, 0)} src={image} alt="" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          <p>${new_price}</p>
        </div>
        <div className="item-price-old">
          <p>${old_price}</p>
        </div>
      </div>
    </div>
  );
};
