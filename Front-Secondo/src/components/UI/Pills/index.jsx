import React from "react";

import "./index.css";

function pills({ pillOption, active, onClick }) {
  return (
    <div className="filter-tab">
      {pillOption.map((val) => (
        <button
          key={val.value}
          className={`filter-option kanit-paragraphMedium ${
            active === val ? "active" : ""
          }`}
          onClick={() => onClick(val)}
        >
          {val.label}
        </button>
      ))}
    </div>
  );
}

export default pills;
