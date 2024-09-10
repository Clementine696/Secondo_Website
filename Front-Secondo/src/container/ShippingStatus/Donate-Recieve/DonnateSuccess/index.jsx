import React, { useState, useEffect, useRef } from "react";
import Layout from "../../../../components/Layout";
import StatusCheck from "../../../../components/UI/ShippingCheck";
import NextStep from "../../../../components/UI/NextStep";
import { Link } from "react-router-dom";

import "../../index.css";
import "../../../../components/UI/Button/index.css";

const product = {
  orderID: "123564798",
  sellername: "Chisu Okami",
  productName:
    "GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์ Linear สำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch",
  productPrice: 800,
  shippingPrice: 50,
  model: "iPhone 15 Pro Blue Titanium",
  warranty: "2 ปี",
  weight: "215 กรัม",
  battery: "4310 mAh",
  display: "6.1 นิ้ว",
  date: "11 พ.ย. 2566",
};

const shipping = [
  {
    status: true,
    num: "1",
    title: "สินค้าได้รับการสั่งซื้อ",
    desc: "สินค้าของคุณถูกสั่งซื้อแล้ว",
    date: "11 พ.ย. 2566",
    time: "21:25",
  },
  {
    status: true,
    num: "2",
    title: "กำลังเตรียมพัสดุ",
    desc: "ผู้ส่งได้เตรียมพัสดุ",
    date: "11 พ.ย. 2566",
    time: "21:25",
  },
  {
    status: false,
    num: "3",
    title: "บริษัทขนส่งเข้ารับพัสดุเรียบร้อยแล้ว",
    desc: "บริษัทขนส่งได้รับพัสดุแล้ว",
    date: "",
    time: "",
  },
  {
    status: false,
    num: "4",
    title: "อยู่ระหว่างขนส่ง",
    desc: "บริษัทขนส่งได้ส่งของเรียบร้อย",
    date: "",
    time: "",
  },
  {
    status: false,
    num: "5",
    title: "การจัดส่งสำเร็จ",
    desc: "ส่งของสำเร็จ",
    date: "",
    time: "",
  },
];

function DonateSuccess() {
  const {
    orderID,
    sellername,
    productName,
    productPrice,
    shippingPrice,
    model,
    warranty,
    weight,
    battery,
    display,
    date,
  } = product;

  const totalPrice = productPrice + shippingPrice;

  return (
    <Layout>
      <div className="shipping-bg-page">
        <div className="kanit-Display-Medium-R">ข้อมูลการขายสินค้า</div>
        <div className="shipping-content">
          <div className="shipping-left-content">
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
            {/* <div className="shipping-button-group">
              <div className="group-button-1">
                <button className="btn-small-primary kanit-paragraphMedium">
                  ส่งสินค้า
                </button>
                <button className="btn-small-secondary kanit-paragraphMedium">
                  ติดต่อผู้ซื้อ
                </button>
              </div>

              <div className="group-button-2">
                <button className="btn-small-secondary kanit-paragraphMedium">
                  ขอขยายระยะเวลาการจัดส่ง
                </button>
              </div>
            </div> */}
          </div>
          <div className="shipping-right-content">
            <div className="shipping-order-seller-details">
              <div className="shipping-seller">
                <div className="shipping-seller-profile-name">
                  <div className="shipping-seller-profile">
                    <img
                      className="seller-profile-pic"
                      // src={test}
                    />
                  </div>
                  <p className="kanit-paragraphMedium">{sellername}</p>
                </div>

                <div className="shipping-status">
                  <p className="kanit-H3">ที่ต้องจัดส่ง</p>
                </div>
              </div>
              <div className="shipping-order kanit-paragraphSmall">
                <p>Order ID</p>
                <p>{orderID}</p>
              </div>
            </div>

            <div className="shipping-product-detail-bg">
              <p className="kanit-paragraphSmall">{productName}</p>
              <div className="outline">
                <div className="inline"></div>
              </div>
              <div className="shipping-very-detail kanit-paragraphSmall">
                {model && (
                  <div className="shipping-product-detail">
                    <p className="detail1">รุ่น</p>
                    <p className="detail2">{model}</p>
                  </div>
                )}
                {warranty && (
                  <div className="shipping-product-detail">
                    <p className="detail1">การรับประกัน</p>
                    <p className="detail2">{warranty}</p>
                  </div>
                )}
                {weight && (
                  <div className="shipping-product-detail">
                    <p className="detail1">น้ำหนัก</p>
                    <p className="detail2">{weight}</p>
                  </div>
                )}
                {battery && (
                  <div className="shipping-product-detail">
                    <p className="detail1">ความจุแบตเตอรี่</p>
                    <p className="detail2">{battery}</p>
                  </div>
                )}
                {display && (
                  <div className="shipping-product-detail">
                    <p className="detail1">ขนาดหน้าจอ</p>
                    <p className="detail2">{display}</p>
                  </div>
                )}
                {date && (
                  <div className="shipping-product-detail">
                    <p className="detail1">วันที่ซื้อ</p>
                    <p className="detail2">{date}</p>
                  </div>
                )}
              </div>
              <div className="outline">
                <div className="inline"></div>
              </div>
              <div className="product-price">
                <p className="kanit-paragraphSmall">ราคาสินค้า</p>
                <p className="kanit-valueList">{productPrice}</p>
              </div>
              <div className="ship-price">
                <p className="kanit-paragraphSmall">ค่าจัดส่ง</p>
                <p className="kanit-valueList">{shippingPrice}</p>
              </div>
              <div className="totla-product-ship-price">
                <p className="kanit-paragraphSmall">ยอดรวมสุทธิ</p>
                <p className="kanit-valueList">{totalPrice}</p>
              </div>
            </div>

            <div className="sell-status-bg">
              <div className="sell-status-title">
                <p className="kanit-paragraphBig">สถานะการขายสินค้า</p>
              </div>

              <div className="outline">
                <div className="inline"></div>
              </div>
              <div className="shipping-status-sender">
                {shipping.map((item, index) => (
                  <React.Fragment key={index}>
                    <StatusCheck
                      status={item.status}
                      title={item.title}
                      num={item.num}
                      desc={item.desc}
                      date={item.date}
                      time={item.time}
                    />
                    {index !== shipping.length - 1 && <NextStep />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DonateSuccess;