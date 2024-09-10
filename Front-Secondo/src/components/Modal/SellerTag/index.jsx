import React from "react";
import "./index.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Input from "../../UI/Input";

import cancel from "../../../icon/cancel.png";

const ModalSellerTag = (props) => {
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
            <div className="kanit-paragraphBig">จัดส่งสินค้า</div>
            <p className="kanit-paragraphSmall">
              กรุณาวางเลขพัสดุ (ตัวพิมพ์ใหญ่ ห้ามเว้นวรรค)
            </p>
          </div>

          <Form className="form-seller-tag">
            <Input
              placeholder="ใส่เลขพัสดุ (Tracking No.)"
              value={Text}
              type="number"
              errorMessage=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ModalSellerTag;
