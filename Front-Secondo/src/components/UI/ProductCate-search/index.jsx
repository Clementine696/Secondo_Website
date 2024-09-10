import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function productCateSearchSideBar({ cateList }) {
  return (
    <div className="side-bar-category">
      {cateList.map((val) => (
        <Link
          style={{ textDecoration: "none" }}
          to={val.nevigate}
          className="search-page-frame-content-all-filter-category-name"
        >
          {val.label}
        </Link>
      ))}
    </div>
  );
}

export default productCateSearchSideBar;
