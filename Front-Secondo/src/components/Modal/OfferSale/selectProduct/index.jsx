import React from "react";
import "./index.css";

import cancel from "../../../../icon/cancel.png";

const ModalSelectItem = (props) => {
  if (!props.open) return null;

  const handleProductSelect = (selectedProduct) => {
    props.onProductSelect(selectedProduct);
    props.onClose();
    // console.log(selectedProduct)
  };

  return (
    <div className="overlay">
      <div className="modal-container-select-product">
        <div className="close-button" onClick={props.onClose}>
          <img src={cancel} className="cancel-icon" />
        </div>

        <div className="model-content">
          <div className="product-select">
            <div className="text-title-desc-modal">
              <p className="kanit-paragraphBig">{props.label}</p>
            </div>

            <div className="kanit-paragraphMedium product-list-title">
              <p>รายการสินค้า</p>
              <p>ราคา</p>
            </div>

            <div className="product-select-column">
              {props.products.map((product, index) => (
                <div
                  className="select-list-product kanit-paragraphSmall"
                  key={index}
                  onClick={() => handleProductSelect(product)}
                >
                  <img src={product.img} className="img-product-select" />
                  <p className="title-product-select">{product.label}</p>
                  <p className="price-product-select">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSelectItem;
