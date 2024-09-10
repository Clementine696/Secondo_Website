import React, { useState } from "react";
import "./index.css";

import "../../../components/UI/Button/index.css";

import chevrondown from "../../../icon/chevron-down.png";
import chevronup from "../../../icon/chevron-up.png";

function DropdownNoti(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // console.log(isOpen);

  return (
    <div className="frame-dropdown">
      <div className="notification-content">
        <div className="title-notification">
          <div>
            <p className="kanit-paragraphtextMedium">{props.name}</p>

          </div>
        </div>
        <div className="notification-icon-frame" onClick={toggleDropdown}>
          <img
            className="notification-icon"
            src={isOpen ? chevronup : chevrondown}
          ></img>
        </div>
      </div>
      <div className={`notification-for-desc ${isOpen ? "open" : ""}`}>
        <div className="notification-desc kanit-paragraphSmall">
          <p className="offer-desc">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default DropdownNoti;
