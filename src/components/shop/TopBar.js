// TopBar.js
import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div>
        <i className="bi bi-grid-3x3-gap-fill"></i>
      </div>
      <div className="result-no">
        <p>Showing 1-12 of 18 Results</p>
      </div>
      <div className="sorting">
        <select className="default-sorting" disabled>
          <option value="0" style={{ display: "none" }}>
            Default Sorting
          </option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
