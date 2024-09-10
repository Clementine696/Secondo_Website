import React, { useState } from "react";
import "./index.css";

const Dropdown = ({ options }) => {
  return (
    <select className="sort-button kanit-paragraphMedium">
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
