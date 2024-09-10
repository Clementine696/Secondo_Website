import React, { useState } from "react";

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";

import Layout from "../../components/Layout";
import ModalS from "../../components/Modal/success";
import ModalSale from "../../components/Modal/OfferSale/sale-score";
import ModalSelectItem from "../../components/Modal/OfferSale/selectProduct";
import ModalConfirmItem from "../../components/Modal/OfferSale/confirmProduct";
import ModalDonate from "../../components/Modal/Donate";
import ModalSellerRate from "../../components/Modal/SellerRate";
import ModalSellerTag from "../../components/Modal/SellerTag";

import success from "../../icon/success-check.png";
import tag from "../../icon/tag.png";
import shipping from "../../icon/shipping.png";
import productpic from "../../../public/images/product.jpg";

const product = [
  {
    img: productpic,
    label:
      "GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์ Linear สำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch",
    price: "0",
  },
  { label: "สินค้าชิ้นที่ 1", price: "1" },
  { label: "สินค้าชิ้นที่ 2", price: "2" },
  { label: "สินค้าชิ้นที่ 3", price: "3" },
];

function Test() {
  const [openModel, setOpenModel] = useState(false);

  const [openModelSale, setOpenModelSale] = useState(false);

  const [openModalSelectItem, setOpenModalSelectItem] = useState(false);

  const [openModelConfirmItem, setOpenModelConfirmItem] = useState(false);

  const [openModalDonate, setOpenModalDonate] = useState(false);

  const [sellerRate, setSellerRate] = useState(false);

  const [sellerTag, setSellerTag] = useState(false);

  // select product
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setOpenModalSelectItem(false); // Close the select product modal
    setOpenModelConfirmItem(true); // Open the confirm product modal
    // console.log(product);
  };

  // console.log(selectedProduct)

  return (
    <Layout>
      <div>
        <button onClick={() => setOpenModel(true)}>Modal success</button>

        <button onClick={() => setOpenModelSale(true)}>Modal Sale</button>

        <button onClick={() => setOpenModalSelectItem(true)}>
          Modal Select
        </button>

        <button onClick={() => setOpenModelConfirmItem(true)}>
          Modal Confirm
        </button>

        <button onClick={() => setOpenModalDonate(true)}>Modal Donate</button>

        <button onClick={() => setSellerRate(true)}>Modal Seller Rate</button>

        <button onClick={() => setSellerTag(true)}>Modal Tag</button>

        <ModalSellerTag
          img={shipping}
          open={sellerTag}
          onClose={() => setSellerTag(false)}
        />

        <ModalDonate
          label="บริจาคตู้เย็น"
          open={openModalDonate}
          onClose={() => setOpenModalDonate(false)}
        />

        <ModalS
          label="ชำระเงินสำเร็จ"
          desc="ชำระเงินเข้าสู่ระบบแล้ว"
          img={success}
          open={openModel}
        />

        <ModalSale
          label="เสนอขายสินค้า"
          desc="ซื้อโทรศัพท์ iphone14"
          img={tag}
          open={openModelSale}
          onClose={() => setOpenModelSale(false)}
          //2 actions
          onClick={() => {
            setOpenModalSelectItem(true), setOpenModelSale(false);
          }}
        />

        <ModalSelectItem
          label="เลือกสินค้าจากรายการขายของคุณ"
          open={openModalSelectItem}
          products={product}
          onProductSelect={handleProductSelect}
          onClose={() => setOpenModalSelectItem(false)}
        />

        {selectedProduct && (
          <ModalConfirmItem
            label="คุณต้องการที่จะเสนอขายสินค้าชิ้นนี้"
            img={selectedProduct.img}
            title={selectedProduct.label}
            open={openModelConfirmItem}
            onClose={() => setOpenModelConfirmItem(false)}
            onClick={() => {
              setOpenModelConfirmItem(false), setOpenModel(true);
            }}
          />
        )}

        <ModalSellerRate
          desc="กิตติพึก เพชรตะพด"
          open={sellerRate}
          onClose={() => setSellerRate(false)}
        />
      </div>
    </Layout>
  );
}

export default Test;
