import React, { useState } from "react";
import ItemBox from "./ItemBox";
import Image1 from "../../images/1.png";
import Image2 from "../../images/2.png";
import Image3 from "../../images/3.png";
import Image4 from "../../images/4.png";
import Image5 from "../../images/5.png";
import Image6 from "../../images/6.png";
import Image7 from "../../images/7.png";
import Image8 from "../../images/8.png";
import Image9 from "../../images/9.png";
import Image10 from "../../images/10.png";
import Image11 from "../../images/11.png";
import Image12 from "../../images/12.png";

const items = [
  {
    imgSrc: Image1,
    title: "Onion & Garlic",
    price: 199,
    originalPrice: 249,
    id: 1,
  },
  { imgSrc: Image2, title: "Persimon", price: 499, originalPrice: 549, id: 2 },
  { imgSrc: Image2, title: "Persimon", price: 499, originalPrice: 549, id: 3 },
  { imgSrc: Image2, title: "Persimon", price: 499, originalPrice: 549, id: 4 },
  { imgSrc: Image2, title: "Persimon", price: 499, originalPrice: 549, id: 5 },
  { imgSrc: Image2, title: "Persimon", price: 499, originalPrice: 549, id: 6 },
  { imgSrc: Image3, title: "Cucumber", price: 299, originalPrice: 349, id: 7 },
  { imgSrc: Image4, title: "Apple", price: 399, originalPrice: 449, id: 8 },
  { imgSrc: Image5, title: "Banana", price: 199, originalPrice: 249, id: 9 },
  { imgSrc: Image6, title: "Mango", price: 299, originalPrice: 349, id: 10 },
  { imgSrc: Image7, title: "Berry", price: 599, originalPrice: 699, id: 11 },
  { imgSrc: Image8, title: "Peach", price: 349, originalPrice: 399, id: 12 },
  { imgSrc: Image9, title: "Grapes", price: 249, originalPrice: 299, id: 13 },
  { imgSrc: Image10, title: "Cherry", price: 499, originalPrice: 599, id: 14 },
  {
    imgSrc: Image11,
    title: "Pineapple",
    price: 349,
    originalPrice: 399,
    id: 15,
  },
  {
    imgSrc: Image12,
    title: "Watermelon",
    price: 299,
    originalPrice: 349,
    id: 16,
  },
];

const itemsPerPage = 6; // Display 9 items per page

const LeftBoxWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);
  var pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages[i] = i + 1;
  }

  // Get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  // Calculate start and end items for the current page
  const startItem = startIndex + 1;
  const endItem = startIndex + currentItems.length;
  const totalItems = items.length;

  return (
    <>
      {/* Top Bar*/}
      <div className="top-bar">
        <div className="result-no">
          <p>
            Showing {startItem}-{endItem} of {totalItems} Results
          </p>
        </div>
        <div className="sorting">
          <select className="default-sorting" id="sorting-options" name="sortingOptions">
            <option value="0">
              Default Sorting
            </option>
            <option value="1">
              Sort By Name
            </option>
            <option value="2">
              Sort By Price
            </option>
          </select>
        </div>
      </div>

      {/* Items Wrapper*/}

      <div className="item-box-wrapper">
        {currentItems.map((item) => (
          <ItemBox
            key={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
            price={item.price}
            originalPrice={item.originalPrice}
            id={item.id}
          />
        ))}
      </div>

      {/*Paginatiton*/}
      <div className="pagination-control">
        <div className="mb-3">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#60; Previous
          </button>

          {pages.map((num,index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(num);
                }}
                className={`${currentPage === num ? "active" : ""}`}
              >
                {num}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &#62;
          </button>
        </div>
        <div>
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>
      </div>
    </>
  );
};

export default LeftBoxWrapper;
