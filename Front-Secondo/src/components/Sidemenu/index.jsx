import React from "react";

import "./index.css";
import { Link, useLocation } from "react-router-dom";

import user from "../../icon/user.png";
import bag from "../../icon/bag.png";
import tag from "../../icon/tag.png";
import donate from "../../icon/donate.png";
import receive from "../../icon/receive.png";
import bid from "../../icon/bid.png";
import co2 from "../../icon/co2.png";
import like from "../../icon/like.png";
import setting from "../../icon/setting.png";
import searchb from "../../icon/search-b.png";

const Sidemenu = () => {
  const location = useLocation();

  return (
    <div className="profile-sidebar">
      <ul className="nav-profile-sidebar kanit-paragraphtextMedium">
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link className="link-menu" to="/profile">
            <div className="icon-menu-sidebar">
              <img src={user} className="sidemenu-icon"></img>
            </div>
            ข้อมูลส่วนตัว
          </Link>
        </li>
        <li className={location.pathname === "/buystate" ? "active" : ""}>
          <Link className="link-menu" to="/buystate">
            <div className="icon-menu-sidebar">
              <img src={bag} className="sidemenu-icon"></img>
            </div>
            การซื้อของฉัน
          </Link>
        </li>
        <li className={location.pathname === "/sellstate" ? "active" : ""}>
          <Link className="link-menu" to="/sellstate">
            <div className="icon-menu-sidebar">
              <img src={tag} className="sidemenu-icon"></img>
            </div>
            การขายของฉัน
          </Link>
        </li>
        <li className={location.pathname === "/donatestate" ? "active" : ""}>
          <Link className="link-menu" to="/donatestate">
            <div className="icon-menu-sidebar">
              <img src={donate} className="sidemenu-icon"></img>
            </div>
            การบริจาคของฉัน
          </Link>
        </li>
        <li className={location.pathname === "/receivestate" ? "active" : ""}>
          <Link className="link-menu" to="/receivestate">
            <div className="icon-menu-sidebar">
              <img src={receive} className="sidemenu-icon"></img>
            </div>
            ขอรับบริจาคของฉัน
          </Link>
        </li>
        {/* <li className={location.pathname === "/bidstate" ? "active" : ""}>
          <Link className="link-menu" to="/bidstate">
            <div className="icon-menu-sidebar">
              <img src={bid} className="sidemenu-icon"></img>
            </div>
            การประมูลของฉัน
          </Link>
        </li> */}
        <li className={location.pathname === "/co2point" ? "active" : ""}>
          <Link className="link-menu" to="/co2point">
            <div className="icon-menu-sidebar">
              <img src={co2} className="sidemenu-icon"></img>
            </div>
            แต้มคะแนน Carbon credits
          </Link>
        </li>
        <li className={location.pathname === "/fav" ? "active" : ""}>
          <Link className="link-menu" to="/fav">
            <div className="icon-menu-sidebar">
            <img src={like} className="sidemenu-icon"></img>
            </div>
            รายการโปรด
          </Link>
        </li>
        <li className={location.pathname === "/setting" ? "active" : ""}>
          <Link className="link-menu" to="/setting">
            <div className="icon-menu-sidebar">
            <img src={setting} className="sidemenu-icon"></img>
            </div>
            ตั้งค่า
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
