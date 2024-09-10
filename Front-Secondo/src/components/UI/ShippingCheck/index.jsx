import React from "react";

import check from "../../../icon/checked.png";

import "./index.css";

function ShippingCheck(props) {
  return (
    <div className="shipping-check">
      <div className="shipping-icon-title-desc">
        {props.status ? (
          <img
            className="shipping-success"
            src={check}
            alt="Shipping Success"
          />
        ) : (
          <div className="oeder-status kanit-paragraphtextMedium">{props.num}</div>
        )}
        <div className="shipping-text">
          <p className="kanit-paragraphtextMedium">{props.title}</p>
          {props.status && (
            <p className="shipping-desc kanit-paragraphSmall">
              {props.desc}
            </p>
          )}
        </div>
      </div>
      <div className="kanit-paragraphSmall">
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default ShippingCheck;
