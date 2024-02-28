import React, { useEffect, useState } from "react";
import "./Popular.css";

import { Item } from "../Item/Item";
export const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => {
        setPopularProducts(data);
      });
  }, []);
  return (
    <div className="popular">
      <h1>Popular in woman</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, idx) => {
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
