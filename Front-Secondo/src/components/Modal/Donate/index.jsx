import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Input from "../../../components/UI/Input";

import "./index.css";

const ModalDonate = (props) => {
  if (!props.open) return null;

  const [Desc, setDesc] = useState("");

  const Description = () => {
    console.log(Desc);
  };

  return (
    <div className="overlay">
      <div className="modal-container-donate">
        <div className="donate-content">
          <div className="title kanit-paragraphBig">
            ระบุเหตุผลที่ต้องการสินค้า :{" "}
            <div className="title-change">{props.label}</div>
          </div>

          <Form className="form-donate">
            <Input
              Label="เขียนเหตุผลที่ต้องการสินค้าที่นี่"
              placeholder="เขียนเหตุผลที่ต้องการสินค้าที่นี่"
              value={Desc}
              type="text"
              errorMessage=""
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Form>
        </div>

        <div className="donate-btn kanit-paragraphMedium">
          <button className="btn-small-secondary" onClick={props.onClose}>
            ยกเลิก
          </button>
          <button
            className="btn-small-primary"
            onClick={() => {
              Description();
              props.onClick();
            }}
          >
            ขอรับบริจาค
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDonate;
