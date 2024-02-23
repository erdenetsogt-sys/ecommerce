import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

export const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, idx) => {
          return (
            <Item
              key={idx}
              name={item.name}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
