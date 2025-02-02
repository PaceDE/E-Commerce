import React from "react";

const SearchBox = () => {
  return (
    <div className="search-ob">
      <div className="text">
        <h6>Search Objects</h6>
      </div>
      <div className="ob-search">
        <form action="#">
          <input
            type="text"
            name="search"
            placeholder="Enter Keyword"
            className="ob"
          />
          <button type="submit" className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
