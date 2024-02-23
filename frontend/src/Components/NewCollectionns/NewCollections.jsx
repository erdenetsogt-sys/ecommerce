import React from "react";
import "./NewCollections.css";
import { Item } from "../Item/Item";
import new_collections from "../Assets/new_collections";
export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, idx) => {
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
