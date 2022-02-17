import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Item() {
  useEffect(() => {
    fetchItem();
    // console.log(match);
    // fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=10f24765-bcda-4761-abe7-34865ffd70b0`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  //   const fetchItem = async () => {};

  return (
    <div>
      <h1>{item.lanuage}</h1>
      {/* <img src={item.data.item.images.icon} alt="" /> */}
    </div>
  );
}

export default Item;
