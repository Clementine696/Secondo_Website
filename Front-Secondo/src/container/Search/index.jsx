import React, { useCallback, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FormCheck,
  FormControl,
} from "react-bootstrap";

import Dropdown from "../../components/UI/Dropdown";
import ItemCard from "../../components/UI/ItemCard";
import SideBarCategories from "../../components/UI/ProductCate-search";
import Pathway from "../../components/UI/Pathway";

import "./index.css";
import "../../styles.css";
import { Link } from "react-router-dom";

const pathway = [
  { label: "หน้าหลัก", value: 1, nevigate: "/" },
  { label: "ขายของ", value: 2, nevigate: "/search/sell" },
]

const options = [
  { value: "option1", label: "ความนิยม" },
  { value: "option2", label: "ล่าสุด" },
  { value: "option3", label: "ราคา: มากไปน้อย" },
  { value: "option4", label: "ราคา: น้อยไปมาก" },
];

const categories = [
  { value: "cate1", label: "เสื้อผ้าและแฟชัน", nevigate: "" },
  { value: "cate2", label: "รองเท้า", nevigate: "" },
  { value: "cate3", label: "สุขภาพและความงาม", nevigate: "" },
  { value: "cate4", label: "เครื่องประดับ", nevigate: "" },
  { value: "cate5", label: "เครื่องใช้ไฟฟ้า", nevigate: "" },
  { value: "cate6", label: "อุปกรณ์ IT", nevigate: "" },
  { value: "cate7", label: "กล้องและอุปกรณ์", nevigate: "" },
  { value: "cate8", label: "รถยนต์", nevigate: "" },
  { value: "cate9", label: "รถมอเตอร์ไซต์", nevigate: "" },
  { value: "cate10", label: "กระเป๋า", nevigate: "" },
  { value: "cate11", label: "เฟอร์นิเจอร์", nevigate: "" },
  { value: "cate12", label: "ของสะสม", nevigate: "" },
  { value: "cate13", label: "หนังสือ", nevigate: "" },
  { value: "cate14", label: "กีฬา", nevigate: "" },
  { value: "cate15", label: "เครื่องดนตรี", nevigate: "" },
  { value: "cate16", label: "แม่และเด็ก", nevigate: "" },
];

const productType = [
  { value: "type1", label: "ของขาย" },
  { value: "type2", label: "รับซื้อ" },
  { value: "type3", label: "บริจาค" },
  { value: "type4", label: "ขอรับบริจาค" },
];

const regionDelivery = [
  { value: "1", label: "กรุงเทพและปริมณฑล" },
  { value: "2", label: "ภาคกลาง" },
  { value: "3", label: "ภาคตะวันออกเฉียงเหนือ" },
  { value: "4", label: "ภาคใต้" },
  { value: "5", label: "ภาคเหนือ" },
  { value: "6", label: "ภาคตะวันออก" },
  { value: "7", label: "ภาคตะวันตก" },
];

function Search() {
  const handleFormProductType = (label) => {
    console.log(label);
  };

  const handleRegion = (label) => {
    console.log(label);
  };

  const [lowerPrice, setLowerPrice] = useState("");
  const [upperPrice, setUpperPrice] = useState("");

  const handleFilterPrice = () => {
    console.log(lowerPrice, upperPrice);
  };

  return (
    <Layout>
      {/* <div className="search-content">
        <Row className="Frame-top">
          <div className="Search-title-amount">ค้นหา คำค้นหา (100)</div>
          <div className="suggest-search">
            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>

            <div className="suggest-item">
              <img
                className="img-search"
                src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                alt="suggestion"
              />
            </div>
          </div>
        </Row>

        <Row className="search-result-content">
          <Row className="row-sort-button">
            <Dropdown options={options} />
          </Row>
          <Row className="frame-result">
            <Col className="filter">
              <div className="kanit-paragraphBig">
                หมวดหมู่
                <div className="kanit-paragraphMedium">
                  Test1
                </div>
              </div>
              <div className="kanit-paragraphMedium">
                ราคา
              </div>
              <div className="kanit-paragraphMedium">
                ส่งจาก
              </div>
              <div className="kanit-paragraphMedium">
                สภาพสินค้า
              </div>
            </Col>
            <Col className="search-result">
              <Row className="row-card-search-result">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </Row>
            </Col>
          </Row>
        </Row>
      </div> */}

      <div className="search-page">
        <div className="background-search-page">
          <Pathway pathwayList={pathway} />
        </div>
        <div className="search-page-frame-suggest">
          <div className="search-page-frame-suggest-topic">
            <div className="search-page-frame-suggest-topic-main-header">
              ค้นหา โทรศัพท์
            </div>
            <div className="search-page-frame-suggest-topic-main-sub">
              (1,000)
            </div>
          </div>
          <div className="search-page-frame-suggest-content">
            <div className="search-page-frame-suggest-content-group-item">
              <Link
                style={{ textDecoration: "none" }}
                className="search-page-frame-suggest-content-group-item-card"
              >
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <div className="search-page-frame-suggest-content-group-item-card-text">
                  โทรศัพท์
                </div>
              </Link>
              <div className="search-page-frame-suggest-content-group-item-card">
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  className="search-page-frame-suggest-content-group-item-card-text"
                >
                  โทรศัพท์
                </Link>
              </div>
              <div className="search-page-frame-suggest-content-group-item-card">
                <div className="search-page-frame-suggest-content-group-item-card-img-frame">
                  <img
                    className="search-page-frame-suggest-content-group-item-card-img"
                    src="/images/iPhone_15_Pro_Blue_Titanium_1.png"
                    alt="suggestion"
                  />
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  className="search-page-frame-suggest-content-group-item-card-text"
                >
                  โทรศัพท์
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="search-page-frame-content">
          <Dropdown options={options} />
          <div className="search-page-frame-content-all">
            <div className="search-page-frame-content-all-filter">
              <div className="search-page-frame-content-all-filter-condition">
                <div className="search-page-frame-content-all-filter-condition-header">
                  ประเภทสินค้า
                </div>
                <div className="search-page-frame-content-all-filter-condition-group-check row">
                  {productType.map((item) => (
                    <FormCheck
                      key={item.value}
                      className="search-page-frame-content-all-filter-condition-group-check-box-text"
                      label={item.label}
                      onClick={() => handleFormProductType(item.label)}
                    />
                  ))}
                </div>
              </div>
              <div className="search-page-frame-content-all-filter-category">
                <div className="search-page-frame-content-all-filter-category-header">
                  หมวดหมู่
                </div>
                <SideBarCategories cateList={categories} />
              </div>
              <div className="search-page-frame-content-all-filter-price">
                <div className="search-page-frame-content-all-filter-price-header">
                  ราคา
                </div>
                <div className="search-page-frame-content-all-filter-price-filter">
                  <Form className="search-page-frame-content-all-filter-price-filter-lower">
                    <FormControl
                      className="search-page-frame-content-all-filter-price-filter-lower-text"
                      type="number"
                      placeholder="ราคาเริ่มต้น"
                      value={lowerPrice}
                      onChange={(e) => {
                        setLowerPrice(e.target.value);
                      }}
                    />
                  </Form>
                  {/* <div className="search-page-frame-content-all-filter-price-filter-line"></div> */}
                  <Form className="search-page-frame-content-all-filter-price-filter-upper">
                    <FormControl
                      className="search-page-frame-content-all-filter-price-filter-upper-text"
                      type="number"
                      placeholder="ราคาสูงสุด"
                      value={upperPrice}
                      onChange={(e) => {
                        setUpperPrice(e.target.value);
                      }}
                    />
                  </Form>
                </div>
                <button
                  className="btn-small-primary kanit-paragraphMedium"
                  onClick={handleFilterPrice}
                >
                  ตกลง
                </button>
              </div>
              <div className="search-page-frame-content-all-filter-delivery">
                <div className="search-page-frame-content-all-filter-delivery-header">
                  ส่งจาก
                </div>
                <div className="search-page-frame-content-all-filter-delivery-group-check row">
                  {regionDelivery.map((item) => (
                    <FormCheck
                      key={item.value}
                      className="search-page-frame-content-all-filter-condition-group-check-box-text"
                      label={item.label}
                      onClick={() => handleRegion(item.label)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="search-page-frame-content-all-group-card">
              <div className="search-page-frame-content-all-group-card-frame">
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Search;
