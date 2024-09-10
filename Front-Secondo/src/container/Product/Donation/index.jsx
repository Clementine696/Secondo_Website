import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import ItemCard from "../../../components/UI/ItemCard";
import HDivider from "../../../components/UI/DividerHorizontal";
import VDivider from "../../../components/UI/DividerVentical";
import ModalS from "../../../components/Modal/success";
import ModalDonate from "../../../components/Modal/OfferSale/sale-score";
import ModalSelectItem from "../../../components/Modal/OfferSale/selectProduct";
import ModalConfirmItem from "../../../components/Modal/OfferSale/confirmProduct";
import Pathway from "../../../components/UI/Pathway";

import success from "../../../icon/success-check.png";
import donate from "../../../icon/donate.png";
import productpic from "../../../../public/images/product.jpg";

import "../../../components/UI/Button/index.css";

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

const productDetail = [
  {
    img: [
      "/images/iPhone_15_Pro_Blue_Titanium_1.png",
      "https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
      "https://helios-i.mashable.com/imagery/reviews/02acfjrNcFF60tTa2SpGTsu/hero-image.fill.size_1248x702.v1695728230.jpg",
      "https://i.guim.co.uk/img/media/3ccc410f49f75f456340f21c37ecf0ef31ae2bc1/368_82_2608_1565/master/2608.jpg?width=1200&quality=85&auto=format&fit=max&s=ec1eda86ea625851c6b39f01fbdeb699",
      "https://ishop.com.uy/wp-content/uploads/2022/05/senales-de-que-necesitas-llevar-tu-iphone-a-reparacion-1080x675.jpg",
    ],
    productName: "iPhone 15 Pro 128GB (Titanium)",
    productRequester: "Mungkud",
    province: "กรุงเทพ",
    productPrice: "1000",
    productCredit: 20,
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    capacity: "-",
    size: "-",
    productDesc: `โทรศัพท์มือถือ Yesphone S32 pro max หน้าจอ 6.8 Ram 3GB/Rom 32GB
    รับประกัน 1 ปี.ระบบปฏิบัติการ : Android 11หน้าจอขนาด : 6.8Ram :
    3GBRom : 32GBซิมการ์ด : 2 ซิม Micro/Nano ซิมกล้องหน้า :
    8.0MPกล้องหลัง : 13.0MPแบตเตอรี่ : 4000 mAh
    ==========================================================
    💛 การขนส่ง 💛⚡ การตัดรอบขนส่ง ทางร้านตัดรอบเวลา 16.00 น.
    จัดส่งวันถัดไป (เข้าระบบ Tracking 18.00 น.)⚡
    ระยะเวลาที่สินค้าจะถูกจัดส่งถึงปลายทาง ขึ้นอยู่กับบริษัทขนส่ง⚡
    ไม่รวมวันอาทิตย์ และ วันหยุดนักขัตฤกษ์🔥
    เงื่อนไขการรับประกันเครื่อง🔥
    ⚠️ ห้ามตกแตก หล่น เปียกน้ำ แกะเครื่อง หรือเป็นรอย มิเช่นนั้น การประกันจะสิ้นสุดทันที 
    ⚠️ สินค้าทุกเครื่องมีประกัน 
    ⚠️ นับจากวันแรกจนถึง 7 วัน ที่ได้รับสินค้า ถ้าสินค้ามีปัญหาเปลี่ยนเครื่องใหม่ภายใน 7 วัน
    ⚠️ หลังจาก 7 วัน ทางร้านจะดูแลเป็นประกันการซ่อม เคลม ตลอดระยะเวลา 1 ปี *ซ่อมอาจจะมีค่าใช้จ่ายในเรื่องของอะไหล่ ราคาขึ้นอยู่กับดุลพินิจของพนักงานเคลม
    ⚠️ ระยะเวลาการเคลม ขึ้นอยู่กับรอบของการเคลม ลูกค้าสามารถโทรสอบถามได้ตลอด
    ⚠️ หากได้รับสินค้าแล้ว อย่าทิ้งกล่องสินค้า หากไม่มีกล่อง หรือ เอกสารของทางร้าน ทางร้านขอสงวนสิทธิ์ถือเป็นที่สิ้นสุดการรับประกันสินค้า
    ⚠️ สินค้าทุกชิ้นเป็นสเปคมาทางโรงเงานซึ่งเราได้ทำการแจ้งไว้แล้วในรายละเอียดสินค้า
    ถ้าลูกค้าไม่พอใจในสินค้าไม่ว่ากรณีใดๆ เราจะไม่มีการคืนเงินให้ลูกค้า
    เพราะถ้าสินค้ามีปัญหา เรายินดีเปลี่ยนเครื่องใหม่ หรือเคลมงานให้ลูกค้าเต็มที่`,
  },
];

const pathway = [
  { label: "หน้าหลัก", value: 1, nevigate: "/" },
  { label: "ขอรับบริจาค", value: 2, nevigate: "/search" },
  { label: "เสื้อผ้า", value: 3, nevigate: "" },
  { label: "เสื้อ COTTON แบรนด์ญี่ปุ่น", value: 4, nevigate: "/product/request" },
];

function Donate() {
  //Modal
  const [openModel, setOpenModel] = useState(false);

  const [openModelSale, setOpenModelSale] = useState(false);

  const [openModalSelectItem, setOpenModalSelectItem] = useState(false);

  const [openModelConfirmItem, setOpenModelConfirmItem] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setOpenModalSelectItem(false); // Close the select product modal
    setOpenModelConfirmItem(true); // Open the confirm product modal
    // console.log(product);
  };

  //scroll
  useEffect(() => {
    if (
      openModel ||
      openModelSale ||
      openModalSelectItem ||
      openModelConfirmItem
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModel, openModelSale, openModalSelectItem, openModelConfirmItem]);

  // console.log(openModel);

  const [selectedImg, setSelectedImg] = useState(productDetail[0].img[0]);
  const [smallImgs, setSmallImgs] = useState(productDetail[0].img.slice(0));
  const [frameSmallImgs, setFrameSmallImgs] = useState("")

  const handleImgClick = (img) => {
    setSelectedImg(img);
    setFrameSmallImgs(img);
  };

  const [isFav, setIsFav] = useState(false);
  //transition
  const [fade, setFade] = useState(false);

  // console.log("isout:", isFav);

  const handleFavClick = () => {
    //change state
    setIsFav(!isFav);
    setFade(true);

    // console.log("isin:", isFav);

    setTimeout(() => {
      setFade(false);
    }, 300);

    if (isFav) {
      console.log("Unlike");
    } else {
      console.log("Like");
    }
  };

  return (
    <Layout>
      <div className="background-product-page">
        <div className="background-product-page-pathway">
          <Pathway pathwayList={pathway} />
        </div>

        <Row className="product-page-item-details">
        <div className="product-page-item-details-group-picture-seller">
            <div className="product-page-item-details-group-picture-seller-big-picture">
              <img
                className="big-img" //TODO:
                // src={product.productDetails.productPictures ? generatePublicUrl(product.productDetails.productPictures[0].img) : "/images/iPhone_15_Pro_Blue_Titanium_1.png"}
                src={selectedImg}
              />
            </div>
            <div className="product-page-item-details-group-picture-seller-small-picture">
              <div className="small-img-container">
                {smallImgs.map((img, index) => (
                  <div key={index} className="col-small-pic">
                    <img
                      className={`small-img-product ${
                        frameSmallImgs === img ? "selected" : ""
                      }`}
                      src={img}
                      onClick={() => handleImgClick(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="product-page-item-details-group-item-description">
            <div className="product-title-seller-name">
              <div className="kanit-paragraphMedium product-title">
                {productDetail[0].productName}
              </div>
              <Link className="seller-product" to="#seller">
                <div className="kanit-paragraphSmall">ขอรับบริจาคโดย {productDetail[0].productRequester}</div>
              </Link>
            </div>

            {/* <Row className="product-price-cc">
              <Col className="kanit-Display-Medium price">1000 บาท</Col>
              <Col className="kanit-Display-Medium cc">20 CO₂ Credit</Col>
            </Row> */}

            <Row className="product-decription">
            <div className="kanit-paragraphtextMedium product-detail">
                ยี่ห้อ :{productDetail[0].brand}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
                รุ่น :{productDetail[0].model}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
                ความจุ :{productDetail[0].capacity}
              </div>
              <div className="kanit-paragraphtextMedium product-detail">
                ขนาดหน้าจอ :{productDetail[0].size}
              </div>
            </Row>

            <div className="divider-horz-2"></div>

            <Row className="product-button-section">
              <button
                className="btn-small-primary kanit-paragraphMedium"
                onClick={() => setOpenModelSale(true)}
              >
                เสนอบริจาค
              </button>
            </Row>
          </div>
        </Row>

        <div className="seller-detail-in-product">
          <Col className="seller-profile-name">
            <div
              style={{
                backgroundColor: "black",
                height: "72px",
                width: "72px",
                borderRadius: "48px",
              }}
            ></div>

            <Col className="seller-name-online-button">
              <div className="seller-name-etc">
                <div className="seller-name-online kanit-paragraphMedium">
                {productDetail[0].productRequester}
                </div>
                <div className="seller-name-online kanit-paragraphMedium">
                  Online activity
                </div>
              </div>

              <div>
                <button className="btn-small-secondary kanit-paragraphtextMedium">
                  ดูข้อมูลผู้ขอรับบริจาค
                </button>
              </div>
            </Col>
          </Col>

          <div className="vent-divider">
            <VDivider />
          </div>

          <Row className="about-seller">
            <Col className="kanit-paragraphtextMedium seller-detail">
              <Row>
                <Col>รายการสินค้าที่ขอรับบริจาค</Col>
                <Col className="color-ratio">10</Col>
              </Row>
            </Col>

            <Col className="kanit-paragraphtextMedium seller-detail">
              <Row>
                <Col>วันที่เข้าร่วม</Col>
                <Col className="color-ratio">5 ปี ที่ผ่านมา</Col>
              </Row>
              <Row>
                <Col>ผู้ติดตาม</Col>
                <Col className="color-ratio">5 พัน</Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="product-page-item-description">
          <div className="product-description-title kanit-paragraphMedium">
            รายละเอียดสินค้า
          </div>
          <p className="kanit-paragraphtextMedium">
            {productDetail[0].productDesc}
          </p>
        </div>

        <div className="group-card-header-item">
          <div className="group-card-header">
            <div className="group-card-header-topic kanit-paragraphBig">
              สินค้าน่าสนใจ
            </div>
            <Link className="group-card-icon-other">
              <div className="group-card-header-other">เพิ่มเติม</div>
              <svg
                className="icon-arrow-right-24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L13.5858 13.4142C14.3668 12.6332 14.3668 11.3668 13.5858 10.5858L9 6"
                  stroke="#D0C58A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
          <HDivider />
          <div className="group-card-item">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>

      <ModalS
        label="เสนอบริจาคสินค้าสำเร็จ"
        desc="สินค้าได้รับการเสนอบริจาคแล้ว"
        img={success}
        open={openModel}
        onClose={() => setOpenModel(false)}
      />

      <ModalDonate
        label="เสนอจากของที่คุณบริจาคอยู่"
        desc="ซื้อโทรศัพท์ iphone14"
        img={donate}
        open={openModelSale}
        onClose={() => setOpenModelSale(false)}
        //2 actions
        onClick={() => {
          setOpenModalSelectItem(true), setOpenModelSale(false);
        }}
      />

      <ModalSelectItem
        label="เลือกสินค้าจากรายการบริจาคของคุณ"
        open={openModalSelectItem}
        products={product}
        onProductSelect={handleProductSelect}
        onClose={() => setOpenModalSelectItem(false)}
      />

      {selectedProduct && (
        <ModalConfirmItem
          label="คุณต้องการที่จะบริจาคสินค้าชิ้นนี้"
          img={selectedProduct.img}
          title={selectedProduct.label}
          open={openModelConfirmItem}
          onClose={() => setOpenModelConfirmItem(false)}
          onClick={() => {
            setOpenModelConfirmItem(false), setOpenModel(true);
          }}
        />
      )}
    </Layout>
  );
}

export default Donate;
