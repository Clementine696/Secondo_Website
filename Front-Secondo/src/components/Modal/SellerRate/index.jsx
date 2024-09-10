import React, { useState } from "react";
import "./index.css";

import cancel from "../../../icon/cancel.png";

const ModalSallerRate = (props) => {
  if (!props.open) return null;

  const [selectedStar, setSelectedStar] = useState(0);
  const [mouseHover, serMouseHover] = useState(0);

  return (
    <div className="overlay">
      <div className="modal-container-sale">
        <div className="close-button" onClick={props.onClose}>
          <img src={cancel} className="cancel-icon" />
        </div>

        <div className="seller-rate-content">
          <div>
            <p className="title kanit-paragraphBig">ให้คะแนนผู้ขาย</p>
            <p className="kanit-paragraphSmall">{props.desc}</p>
          </div>
          
          <div className="rate-star">
            {[...Array(5)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={`star ${selectedStar > i ? "selected" : ""} ${
                    mouseHover > i ? "selected" : ""
                  }`}
                  onMouseOver={() => serMouseHover(i + 1)}
                  onMouseOut={() => serMouseHover(0)}
                  onClick={() => setSelectedStar(i + 1)}
                >
                  &#9733;
                </span>
              );
            })}
          </div>
          <div className="seller-rate-btn kanit-paragraphMedium">
            <button className="btn-small-link-ghost" onClick={props.onClose}>
              ยกเลิก
            </button>
            <button className="btn-small-primary">ตกลง</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSallerRate;
