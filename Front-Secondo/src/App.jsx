import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./container/Home";

import Signin from "./container/Signin";
import Signup from "./container/Signup";
import RegisPhone from "./container/Signup/RegisPhone";
import Otp from "./container/Signup/Otp";

import AllProduct from "./container/AllProducts";
import AllProductDonate from "./container/AllProducts/DonateProduct";
import AllProductRecieve from "./container/AllProducts/ReceiveProduct";
import AllProductInterest from "./container/AllProducts/InterestProduct";

import Search from "./container/Search";
import SearchBuy from "./container/Search/searchBuy";
import SearchDonate from "./container/Search/searchDonate";
import SearchRequest from "./container/Search/searchRequest";

import Product from "./container/Product";
import Offersale from "./container/Product/Offersale";
import Donate from "./container/Product/Donation";
import RequireDonate from "./container/Product/Requiredonate";

import Profile from "./container/UserPage/Profile";
import BuyState from "./container/UserPage/BuyStatus";
import SellState from "./container/UserPage/SellStatus";
import DonateState from "./container/UserPage/DonateStatus";
import ReceiveState from "./container/UserPage/ReceiveStatus";
import BidState from "./container/UserPage/BidStatus";
import Co2Point from "./container/UserPage/Co2Point";
import Fav from "./container/UserPage/FavPage";
import Setting from "./container/UserPage/Setting";

import SellProduct from "./container/SellProduct";
import PostRequestProduct from "./container/SellProduct/PostRequestProduct";
import PostDonateProduct from "./container/SellProduct/PostDonateProduct";
import PostBuyProduct from "./container/SellProduct/PostBuyProduct";

import CheckOut from "./container/CheckOut";

import ShippingStatus from "./container/ShippingStatus";
//Buy
import ShippingStatusBuy from "./container/ShippingStatus/Buy/Buyinfo";
import ShippingStatusConfirm from "./container/ShippingStatus/Buy/ConfirmRecieve";
import ShippingSellerRevirw from "./container/ShippingStatus/Buy/SellerReview";
//Sell
import ShippingSellSucess from "./container/ShippingStatus/Sell/SuccessProcess";
import ShippingStatusSell from "./container/ShippingStatus/Sell/Sellinfo";
//Donate & Recieve
import ShippingStatusDonate from "./container/ShippingStatus/Donate-Recieve/DonateInfo";
import ShippingDonateSucess from "./container/ShippingStatus/Donate-Recieve/DonnateSuccess";
import ShippingStatusRecieve from "./container/ShippingStatus/Donate-Recieve/RecieveInfo";
import ShippingStatusRConfirm from "./container/ShippingStatus/Donate-Recieve/ConfirmRecieve";
import ShippingRecieveSucess from "./container/ShippingStatus/Donate-Recieve/RecieveSuccess";

import Offer from "./container/Offer";
import OfferDonate from "./container/Offer/Donate";
import OfferRecieve from "./container/Offer/Recieve";
import OfferSell from "./container/Offer/Sell";

import Test from "./container/Test";

import PrivateRoute from "./components/HOC/PrivateRoute.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getInitialData, isUserLoggedIn } from './actions';

export default function App() {

  // // Authenticate
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
  }, [auth.authenticate]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />

          {/* <Route path="/signin" Component={Signin} /> */}
          {/* <Route path="/category" element={<PrivateRoute> <Category/> </PrivateRoute>} /> */}
          {/* <Route index element={<PrivateRoute> <Home/> </PrivateRoute>} />
          <Route path="/" element={<PrivateRoute> <Home/> </PrivateRoute>} /> */}


          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/regisphone" element={<RegisPhone />} />
          <Route path="signup/regisphone/Otp" element={<Otp />} />

          <Route path="allproduct" element={<AllProduct />} />
          <Route path="allproduct/donate" element={<AllProductDonate />} />
          <Route path="allproduct/recieve" element={<AllProductRecieve />} />
          <Route path="allproduct/interest" element={<AllProductInterest />} />

          <Route path="search/sell" element={<Search />} />
          {/* <Route path="search" element={<PrivateRoute> <Search/> </PrivateRoute>} /> */}
          <Route path="search/buy" element={<SearchBuy />} />
          <Route path="search/donate" element={<SearchDonate />} />
          <Route path="search/request" element={<SearchRequest />} />

          <Route path="product/seller" element={<Product />} />
          {/* <Route path="/:productSlug/:productId/p" element={<Product />} /> */}
          <Route path="product/buyer" element={<Offersale />} />
          {/* <Route path="product/offerbuy" element={<Offerbuy />} /> */}
          <Route path="product/request" element={<Donate />} />
          <Route path="product/donate" element={<RequireDonate />} />

          <Route path="profile" element={<Profile />} />
          <Route path="buystate" element={<BuyState />} />
          <Route path="sellstate" element={<SellState />} />
          <Route path="donatestate" element={<DonateState />} />
          <Route path="receivestate" element={<ReceiveState />} />
          <Route path="bidstate" element={<BidState />} />
          <Route path="co2point" element={<Co2Point />} />
          <Route path="fav" element={<Fav />} />
          <Route path="setting" element={<Setting />} />

          <Route path="account/checkout" element={<CheckOut />} />

          <Route path="account/shippingstatus" element={<ShippingStatus />} />
          {/* Buy */}
          <Route path="account/shippingstatus/buyinfo" element={<ShippingStatusBuy />} />
          <Route path="account/shippingstatus/confirmrecieve" element={<ShippingStatusConfirm />} />
          <Route path="account/shippingstatus/sellerreview" element={<ShippingSellerRevirw />} />
          {/* Sell */}
          <Route path="account/shippingstatus/sellinfo" element={<ShippingStatusSell />} />
          <Route path="account/shippingstatus/successprocess" element={<ShippingSellSucess />} />
          {/* Donate & Recieve */}
          <Route path="account/shippingstatus/donateinfo" element={<ShippingStatusDonate />} />
          <Route path="account/shippingstatus/donatesuccess" element={<ShippingDonateSucess />} />
          <Route path="account/shippingstatus/recieveinfo" element={<ShippingStatusRecieve />} />
          <Route path="account/shippingstatus/confirmrecievedonate" element={<ShippingStatusRConfirm />} />
          <Route path="account/shippingstatus/recievesuccess" element={<ShippingRecieveSucess />} />

          <Route path="offer" element={<Offer />} />
          <Route path="offer/donate" element={<OfferDonate />} />
          <Route path="offer/recieve" element={<OfferRecieve />} />
          <Route path="offer/sell" element={<OfferSell />} />

          {/* <Route path="account/sell/additem" element={<SellProduct />} /> */}
          <Route path="sellstate/additem" element={<SellProduct />} />
          <Route path="sellstate/additem" element={<PrivateRoute> <SellProduct /> </PrivateRoute>} />
          <Route path="buystate/additem" element={<PostBuyProduct />} />
          <Route path="receivestate/additem" element={<PostRequestProduct />} />
          <Route path="donatestate/additem" element={<PostDonateProduct />} />

          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
