import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import ProductFav from "../../../components/UI/Productfav";

import productFav from "../../../../public/images/product.jpg";

const Items = [
  {
    img: productFav,
    title: "Product 1",
    price: "99$",
    seller: "ttb",
    status: true,
  },
  {
    img: productFav,
    title: "Product 2",
    price: "99$",
    seller: "ttb",
    status: true,
  },
  {
    img: productFav,
    title: "Product 3",
    price: "99$",
    seller: "ttb",
    status: false,
  },
  {
    img: productFav,
    title: "Product 4",
    price: "99$",
    seller: "ttb",
    status: false,
  },
];

// console.log(Items);

function Fav() {
  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="user-content">
          <div className="User-page-title kanit-Display-Large">รายการโปรด</div>

          <div className="profile-display">
            {Items.map((item, index) => (
              <ProductFav
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                seller={item.seller}
                status={item.status}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Fav;
