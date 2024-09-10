import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import Layout from "../../../components/Layout";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../actions";

import Cancel from "../../../icon/cancel.png";
import RedCancel from "../../../icon/close.png";

import "../index";
import { Link, useNavigate } from "react-router-dom";

function PostDonateProduct() {

  const category = useSelector((state) => state.category);
  // console.log(category)
  const dispatch = useDispatch();

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      if(category.parentId == null){
        myCategories.push(
          {
            // img: category.image,
            label: category.name,
            value: category._id,
            // children: category.children.length > 0 && renderCategories(category.children)
          }
        );
      }
    }

    return myCategories;
  };

  // const categoryItem = renderCategories(category.categories)

  const [selectedImages, setSelectedImages] = useState([]);
  
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return file
    });
    // setProductPictures([...productPictures, e.target.files[0]]);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  // connect api to save data
  const addProductForm = () => {
    console.log(productName);
    console.log(productPrice);
    console.log(productDetail);
    console.log(shippingCost);
    console.log(categoryId);
    // console.log(selectedImages);

    for (let pic of selectedImages) {
      console.log("Test")
      console.log(pic.name)
    }
    const form = new FormData();
    form.append("name", productName);
    form.append("price", productPrice);
    form.append("specifications", "Spec");
    form.append("description", productDetail);
    form.append("shippingCost", shippingCost);
    form.append("category", categoryId);
    for (let pic of selectedImages) {
      form.append("productPicture", pic);
    }
    dispatch(addProduct(form));
  };

  const [value, setValue] = useState('')
  // const optionsCategory = [
  //   {label: "เสื้อผ้าและแฟชั่น", value: 1},
  //   {label: "รองเท้า", value: 2},
  //   {label: "ความงามและของใช้ส่วนตัว", value: 3},
  // ];
  const optionsCategory = renderCategories(category.categories);

  // function HandleSelect(event) {
  //   setValue(event.target.value);
  // }

  // const navigate = useNavigate();

  // const nevigateToSellstate = () => {
  //   navigate("/sellstate");
  // };

  return (
    
    <Layout>
      <div className="background-sell-product-page">
        <div className="product-page-path-way">
          <div className="product-page-group-path-way">
            <div className="product-page-group-path-way-before-path">
              <Link
                className="product-page-group-path-way-before-path-text kanit-paragraphBig"
                style={{ textDecoration: "none" }}
                to={"/profile"}
                // onClick={"/profile"}
              >
                บัญชี
              </Link>
              <div className="product-page-group-path-way-before-path-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18.001L13.5858 13.4152C14.3668 12.6341 14.3668 11.3678 13.5858 10.5868L9 6.00098"
                    stroke="#00243D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="product-page-group-path-way-before-path">
              <Link
                className="product-page-group-path-way-before-path-text kanit-paragraphBig"
                style={{ textDecoration: "none" }}
                to={"/donatestate"}
              >
                การบริจาคของฉัน
              </Link>
              <div className="product-page-group-path-way-before-path-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18.001L13.5858 13.4152C14.3668 12.6341 14.3668 11.3678 13.5858 10.5868L9 6.00098"
                    stroke="#00243D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Link
              className="product-page-group-path-way-before-path-text kanit-paragraphBig"
              style={{ textDecoration: "none" }}
            >
              เพิ่มสินค้าบริจาค
            </Link>
          </div>
        </div>
        <div className="sell-product-topic">เพิ่มสินค้าสำหรับการบริจาค</div>
        <div className="sell-product-content">
          <div className="sell-product-content-upload-image">
            <label className="sell-product-content-upload-image-label kanit-Display-Large">
              Click to add images
              <input
                className="sell-product-content-upload-image-input"
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/*"
              />
            </label>

            <div className="sell-product-content-upload-image-preview">
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div
                      className="sell-product-content-upload-image-preview-frame"
                      key="image"
                    >
                      <div className="frame-out-icon-cancel">
                        <button
                          className="btn-cancel-sell-product"
                          onClick={() =>
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image)
                            )
                          }
                        >
                          <img
                            src={Cancel}
                            className="btn-cancel-icon-sell-product"
                          />
                          <img
                            src={RedCancel}
                            className="btn-cancel-icon-sell-product-hover"
                          />
                        </button>
                      </div>
                      <img
                        className="sell-product-content-upload-image-preview-frame-image"
                        src={URL.createObjectURL(image)}
                        alt="upload"
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="sell-product-content-info-item">
            {/* <Col className="sell-product-content-info-item-group"> */}
              <Form className="sell-product-content-info-item-input">
                <Input
                  Label="ชื่อสินค้า"
                  placeholder="ระบุชื่อของสินค้า"
                  value={productName}
                  type="text"
                  errorMessage=""
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />

                <div className="sell-product-content-info-item-input-options">
                  <p className="sell-product-content-info-item-input-options-topic kanit-paragraphtextMedium">เลือกหมวดหมู่</p>
                  <select className="sell-product-content-info-item-input-options-category kanit-paragraphtextMedium" 
                  // onChange={HandleSelect}
                  onChange={(e) => setCategoryId(e.target.value)} >
                    {optionsCategory.map(optionsCategory => (
                      <option key={optionsCategory.value} value={optionsCategory.value}>{optionsCategory.label}</option>
                    ))}
                  </select>
                </div>
                <Input
                  Label="ราคาสินค้า"
                  placeholder="ระบุราคาของสินค้า"
                  value={productPrice}
                  type="text"
                  errorMessage=""
                  onChange={(e) => {
                    setProductPrice(e.target.value);
                  }}
                />
                <Input
                  Label="รายละเอียดสินค้า"
                  placeholder="ระบุรายละเอียดของสินค้า"
                  value={productDetail}
                  type="text"
                  errorMessage=""
                  onChange={(e) => {
                    setProductDetail(e.target.value);
                  }}
                />
                <Input
                  Label="ค่าจัดส่ง"
                  placeholder="ระบุค่าจัดส่ง"
                  value={shippingCost}
                  type="text"
                  errorMessage=""
                  onChange={(e) => {
                    setShippingCost(e.target.value);
                  }}
                />
                </Form>
                <div className="sell-product-content-info-item-input-button-group">
                <Link
                  className="btn-small-secondary kanit-paragraphMedium"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  ยกเลิก
                </Link>
                {selectedImages.length > 10 ? (
                  <Link
                    className="btn-small-primary-disabled kanit-paragraphMedium w-100"
                    // disabled={true}
                    style={{ textDecoration: "none" }}
                  >
                    รูปภาพเกินกำหนด
                  </Link>
                ) : (
                  <Link
                    className="btn-small-primary kanit-paragraphMedium"
                    // onClick={() => {
                    //   console.log(selectedImages), "ddd";
                    // }}
                    style={{ textDecoration: "none" }}
                    to=""
                  >
                    ลงบริจาค
                  </Link>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* <button
          className="btn-small-primary kanit-paragraphMedium"
          type="submit"
          onClick={addProductForm}
        >
          ลงขาย
        </button> */}
    </Layout>
  );
}

export default PostDonateProduct;
