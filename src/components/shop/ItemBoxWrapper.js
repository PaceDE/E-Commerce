// ItemBoxWrapper.js
import React from "react";
import ItemBox from "./ItemBox";
import Image1 from "../../images/1.jpg";
import Image2 from "../../images/2.jpg";
import Image3 from "../../images/3.jpg";

const items = [
  { imgSrc: Image1, title: "Onion & Garlic", price: 199, originalPrice: 249,id:1},
  { imgSrc: Image2, title: "Persimon", price: 499, originalPrice: 549, id:2 },
  { imgSrc: Image3, title: "Cucumber", price: 299, originalPrice: 349, id:3 },
  
];

const ItemBoxWrapper = () => {
  return (
    <div className="item-box-wrapper">
      {items.map((item, index) => (
        <ItemBox
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          price={item.price}
          originalPrice={item.originalPrice}
          id={item.id}
        />
      ))}
     
      {/* Add more ItemBox components as needed */}
    </div>
  );
};

export default ItemBoxWrapper;
