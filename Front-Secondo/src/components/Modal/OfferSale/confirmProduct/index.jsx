import React from "react";
import "./index.css";

import cancel from "../../../../icon/cancel.png";

const ModalConfirmItem = (props) => {
  if (!props.open) return null;
  // console.log(props);

  return (
    <div className="overlay">
      <div className="modal-container-confirm-product">
        <div className="close-button" onClick={props.onClose}>
          <img src={cancel} className="cancel-icon" />
        </div>

        <div className="model-content">
          <div className="product-confirm">
            <div className="kanit-paragraphBig modal-title">{props.label}</div>
            <div className="product-img-title">
              <img src={props.img} className="img-product"/>
              <p className="product-title kanit-paragraphSmall">{props.title}</p>
            </div>
          </div>

          <div className="button-pop kanit-paragraphMedium">
            <button className="btn-small-primary" onClick={props.onClick}>เสนอขาย</button>
            <button className="btn-small-secondary">ลงขายสินค้าใหม่</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmItem;
