import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import { Item } from "../Item/Item";

export const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => {
        setNew_collection(data);
      });
  }, []);
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, idx) => {
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
