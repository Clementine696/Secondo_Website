import React from "react";
import Layout from "../../../components/Layout";

import ItemCard from "../../../components/UI/ItemCard";
import { useDispatch, useSelector } from "react-redux";

import "../index.css";
import "../../../styles.css";

import "../../../components/UI/Button/index.css";

function AllProductInterest() {
  const product = useSelector((state) => state.product);

  const renderProducts = (products) => {
    let myProducts = [];
    for (let product of products) {
      myProducts.push({
        _id: product._id,
        slug: product.slug,
        img: product.productPictures,
        title: product.name,
        province: "กรุงเทพ",
        price: product.price,
        credit: 0.1,
        // children: category.children.length > 0 && renderCategories(category.children)
      });
    }
    return myProducts;
  };

  const itemInterest = renderProducts(product.products);

  //แบ่ง 4
  const fourItemInterest = itemInterest.reduce((acc, curr, index) => {
    const fourIndex = Math.floor(index / 4);
    if (!acc[fourIndex]) {
      acc[fourIndex] = [];
    }
    acc[fourIndex].push(curr);
    return acc;
  }, []);
  console.log("List array" ,fourItemInterest);

  return (
    <Layout>
      <div className="container-all-product">
        <label className="label-all-product kanit-Display-Large-R">
          สินค้าน่าสนใจ
        </label>
        {fourItemInterest.map((group, groupIndex) => (
          <div className="all-group-card">
            {group.map((item, index) => (
              <ItemCard
                key={index}
                img={item.img}
                _id={item._id}
                slug={item.slug}
                title={item.title}
                province={item.province}
                price={item.price}
                credit={item.credit}
              />
            ))}
          </div>
        ))}
        <div className="all-group-card"></div>
      </div>
    </Layout>
  );
}

export default AllProductInterest;
