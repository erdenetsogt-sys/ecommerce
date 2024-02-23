import React from "react";
import "./Popular.css";
import data_products from "../Assets/data";
import { Item } from "../Item/Item";
export const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in woman</h1>
      <hr />
      <div className="popular-item">
        {data_products.map((item, idx) => {
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
          // return <Item props={item} key={idx} />;
        })}
      </div>
    </div>
  );
};
