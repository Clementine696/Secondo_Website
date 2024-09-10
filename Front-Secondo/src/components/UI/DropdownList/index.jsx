import React, { useState } from "react";
import "./index.css";

import "../../../components/UI/Button/index.css";

import chevrondown from "../../../icon/chevron-down.png";
import chevronup from "../../../icon/chevron-up.png";

function DropdownList(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // console.log(isOpen);

  return (
    <div className="frame-dropdown">
      <div className="user-profile-price-icon">
        <div className="user-profile-price">
          <div className="dropdown-user-profile">
            <img className="offer-pic" src=""></img>
            <div>
              <p className="kanit-paragraphtextMedium">{props.name}</p>
              {/* <p></p> */}
            </div>
          </div>
          <div className="offer-etc kanit-valueList">{props.price}บาท</div>
        </div>
        <div className="offer-icon-frame" onClick={toggleDropdown}>
          <img
            className="offer-icon"
            src={isOpen ? chevronup : chevrondown}
          ></img>
        </div>
      </div>
      <div className={`offer-for-desc ${isOpen ? "open" : ""}`}>
        <div className="offer-title-desc kanit-paragraphtextMedium">
          <p className="offer-title">เหตุผลเพิ่มเติม :</p>
          <p className="offer-desc">{props.desc}</p>
        </div>
        <button className="offer-button btn-small-primary">ยอมรับ</button>
      </div>
    </div>
  );
}

export default DropdownList;
