import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function pathwayProduct({ pathwayList }) {
  return (
    <div className="product-page-path-way">
      <div className="product-page-group-path-way">
        {pathwayList.map((val, index) => (
          <div className="pathway-group-distance">
            <Link
              className="pathway-group-text kanit-paragraphBig"
              to={val.nevigate}
            >
              {val.label}
            </Link>
            {index !== pathwayList.length - 1 && (
              <div className="product-page-group-path-way-before-path-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18.001L13.5858 13.4152C14.3668 12.6341 14.3668 11.3678 13.5858 10.5868L9 6.00098"
                    stroke="#00243D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default pathwayProduct;
