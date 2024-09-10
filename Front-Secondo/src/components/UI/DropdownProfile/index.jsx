import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function DropdownItem(props) {
  return (
    <li className="dropdown-item">
      <Link className="dropdown-link" to={props.link} onClick={props.onClick}>
        <img className="dropdown-icon" src={props.img}></img>
        {props.text}
      </Link>
    </li>
  );
}

export default DropdownItem;
