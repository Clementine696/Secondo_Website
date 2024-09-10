import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";

import "../index.css";
import "../../../styles.css";

import DropdownList from "../../../components/UI/DropdownList";
import Pathway from "../../../components/UI/Pathway";
import "../../../components/UI/Button/index.css";

const user = [
  {
    name: "name1",
    price: 500,
    desc: "desc1",
  },
  {
    name: "name2",
    price: 100,
    desc: "desc2",
  },
  {
    name: "name2",
    price: 300,
    desc: "desc2",
  },
];

const pathway = [
  { label: "หน้าหลัก", value: 1, nevigate: "/" },
  { label: "เสื้อผ้า", value: 2, nevigate: "/search" },
  { label: "เสื้อ COTTON แบรนด์ญี่ปุ่น", value: 3, nevigate: "/product" },
];

function Offer() {
  return (
    <Layout>
      <div className="offer-sell-bg">
        <div className="background-product-page-pathway">
          <Pathway pathwayList={pathway} />
        </div>
        <div className="offer-content">
          <div className="offer-left-content">
            <div className="product-page-item-details-group-picture-seller">
              <div className="product-page-item-details-group-picture-seller-big-picture">
                <img
                  className="big-img"
                  src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                />
              </div>
              <div className="product-page-item-details-group-picture-seller-small-picture">
                <div className="col-small-pic">
                  <img
                    className="small-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                  />
                </div>
                <div className="col-small-pic">
                  <img
                    className="small-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                  />
                </div>
                <div className="col-small-pic">
                  <img
                    className="small-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="offer-right-content">
            <div className="offer-title-seller-name">
              <p className="offer-title kanit-paragraphMedium">
                ชื่อ Product ที่ยาวๆ แต่ไม่เกิน 2 บรรทัด 2 บรรทัดจริงๆ
                นะแต่ตอนนี้มันไม่ถึง 2 อ่ะ
              </p>
              <p className="offer-seller kanit-paragraphSmall">name</p>
            </div>
            <div className="outline">
              <div className="inline"></div>
            </div>
            <div className="offer-price-list">
              <p className="kanit-paragraphtextMedium">ผู้เสนอราคา</p>
              {user.map((item, index) => (
                <DropdownList
                  key={index}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Offer;
