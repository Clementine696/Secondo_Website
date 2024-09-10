import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";

import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import Pills from "../../../components/UI/Pills";

import searchy from "../../../icon/search-y.png";
import add from "../../../icon/add.png";
import chevronRight from "../../../icon/chevron-right.png";
import edit from "../../../icon/edit.png";
import shipping from "../../../icon/shipping.png";
import receive from "../../../icon/receive.png";
import useralert from "../../../icon/user-alert.png";

import plant from "../../../../public/images/pant.jpg";

const filterItems = [
  { label: "ทั้งหมด", value: "0" },
  { label: "ขอรับบริจาค", value: "1" },
  { label: "มีการเสนอบริจาค", value: "2" },
  { label: "ส่งคำร้อง", value: "3" },
  { label: "ที่ต้องจัดส่ง", value: "4" },
  { label: "ที่ต้องได้รับ", value: "5" },
  { label: "รอยืนยันสินค้า", value: "6" },
  { label: "สำเร็จ", value: "7" },
];

const items = [
  {
    date: "20/07/2021",
    img: plant,
    desc: {
      name: "กระเป๋ากางเกง",
      detail: "กระเป๋ากางเกงที่เก็บเอาไว้จนเก่า",
    },
    status: {
      name: "ขอรับบริจาค",
      time: "",
    },
    point: 100,
    price: 500,
    icons: [],
    Link: "",
  },
  {
    date: "21/07/2021",
    img: plant,
    desc: {
      name: "Title 2",
      detail: "Desc 2",
    },
    status: {
      name: "มีการเสนอบริจาค",
      time: "",
    },
    point: 100,
    price: 500,
    icons: [],
    Link: "",
  },
  {
    date: "22/07/2021",
    img: plant,
    desc: {
      name: "Title 3",
      detail: "Desc 3",
    },
    status: {
      name: "ที่ต้องจัดส่ง",
      time: "",
    },
    point: 100,
    price: 500,
    icons: [],
    Link: "",
  },
  {
    date: "23/07/2021",
    img: plant,
    desc: {
      name: "Title 4",
      detail: "Desc 4",
    },
    status: {
      name: "สำเร็จ",
      time: "",
    },
    point: 100,
    price: 500,
    icons: [],
    Link: "",
  },
];

//ผากใส่ Link หน้า Edit
items.forEach((item) => {
  switch (item.status.name) {
    case "ขอรับบริจาค":
      item.icons = [edit, chevronRight];
      item.Link = ["/", "/account/shippingstatus/recieveinfo"];
      break;
    case "ที่ต้องจัดส่ง":
      item.icons = [shipping, chevronRight];
      item.Link = [
        "/account/shippingstatus/sellinfo",
        "/account/shippingstatus/recieveinfo",
      ];
      break;
    case "มีการเสนอบริจาค":
      item.icons = [useralert, chevronRight];
      item.Link = ["/offer/recieve", "/account/shippingstatus/recieveinfo"];
      break;
    case "สำเร็จ":
      item.icons = [chevronRight];
      item.Link = ["/account/shippingstatus/RecieveSuccess"];
      break;
    default:
      item.icons = chevronRight;
      item.Link = ["/account/shippingstatus/recieveinfo"];
      break;
  }
});

function receiveStatus() {
  const [font, setFont] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setFont(window.innerWidth < 1500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const resizeFontClass = font
    ? "kanit-paragraphtextMedium"
    : "kanit-paragraphMedium";

  const [filter, setFilter] = useState(filterItems[0]);

  // console.log("Current Filter:", filter);

  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="user-content">
          <div className="buy-page-title kanit-Display-Large">
            การขอรับบริจาคของฉัน
          </div>

          <Pills
            pillOption={filterItems}
            active={filter}
            onClick={(selectedFilter) => setFilter(selectedFilter)}
          ></Pills>

          <div className="search-add-button">
            <Form className="search-container-filter">
              <Form.Control
                className="search-bar-filter kanit-paragraphSmall"
                type="text"
                placeholder="ค้นหาสินค้า ชื่อผู้ขาย หมายเลขคำสั่งซื้อ"
              />
              <img src={searchy} className="search-icon-filter"></img>
            </Form>
            <Link className="add-product-user-page btn-small-secondary kanit-paragraphMedium">
              <img src={add} className="add-icon"></img>
              เพิ่มสินค้าขอรับบริจาค
            </Link>
          </div>

          <div className="background-data-table">
            <div className="header-table-data kanit-paragraphMedium">
              <p className="header-item date-col">วันที่ซื้อ</p>
              <p className="header-item desc-col">รายละเอียดสินค้า</p>
              <p className="header-item status-col">สถานะ</p>
              <p className="header-item point-col"></p>
              <p className="header-item price-col"></p>
              <p className="header-item func-col"></p>
            </div>

            {items.map((item, index) => (
              <div className={`data-table ${resizeFontClass}`}>
                <p className="data-item date-col">{item.date}</p>

                <div className="data-item desc-col">
                  <img src={item.img} className="pic-product-table"></img>
                  <div className="product-name-desc-status">
                    <p className="kanit-paragraphMedium">{item.desc.name}</p>
                    <p className="kanit-paragraphSmall">{item.desc.detail}</p>
                  </div>
                </div>

                <div className="data-item status-col">
                  <div className="product-status-time">
                    <p className="kanit-paragraphMedium">{item.status.name}</p>
                    <p className="status-time kanit-paragraphSmall">
                      {item.status.time}
                    </p>
                  </div>
                </div>

                <p className="data-item point-col"></p>

                <p className="data-item price-col"></p>

                <div className="data-item func-col">
                  {Array.isArray(item.icons) &&
                    item.icons.map((icon, iconIndex) => (
                      <Link
                        key={iconIndex}
                        className="touch-point"
                        to={item.Link[iconIndex]}
                      >
                        <img
                          className="func-icon"
                          src={icon}
                          alt={`icon-${iconIndex}`}
                        />
                      </Link>
                    ))}
                  {!Array.isArray(item.icons) && (
                    <Link
                      key="chevronRight"
                      className="touch-point"
                      to="/account/shippingstatus/sellinfo"
                    >
                      <img
                        className="func-icon"
                        src={chevronRight}
                        alt={`icon`}
                      />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default receiveStatus;
