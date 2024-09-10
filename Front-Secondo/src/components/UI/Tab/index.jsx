import React from "react";

import "./index.css";

function tabs({ tabMenu, active, onClick }) {
  return (
    <div className="bloc-tab">
      {tabMenu.map((val) => (
        <button
          key={val.value}
          className={`tabs kanit-paragraphMedium ${
            active === val.value ? "active" : ""
          }`}
          onClick={() => onClick(val.value)}
        >
          {val.label}
        </button>
      ))}
    </div>
  );
}

export default tabs;
