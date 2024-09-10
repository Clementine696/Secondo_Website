import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import cancel from "../../../../icon/cancel.png";

const ModalSale = (props) => {
  if (!props.open) return null;

  return (
    <div className="overlay">
      <div className="modal-container-sale">
        <div className="close-button" onClick={props.onClose}>
          <img src={cancel} className="cancel-icon" />
        </div>

        <div className="model-content">
          <img src={props.img} className="tag-icon" />
          <div className="text-title-desc-modal">
            <div className="kanit-paragraphBig">{props.label}</div>
            <p className="kanit-paragraphSmall">{props.desc}</p>
          </div>

          <div className="button-pop kanit-paragraphtextMedium">
            <button className="btn-small-primary" onClick={props.onClick}>
              <Link className="link-to" to="#">
                เสนอจากของที่คุณมีอยู่
              </Link>
            </button>
            <button className="btn-small-secondary">
              <Link className="link-to2" to="/sellstate/additem">
                ลงขายสินค้าใหม่
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSale;
