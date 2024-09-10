import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Button/index.css";

import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidemenu";
import Tabs from "../../../components/UI/Tab";
import Input from "../../../components/UI/Input";

import add from "../../../icon/add.png";
import masterCard from "../../../../public/images/mastercard.jpg";
import visa from "../../../../public/images/visa.jpg";
import kbank from "../../../../public/images/kbank.png";
import ttb from "../../../../public/images/ttb.jpg";

const tabItems = [
  { label: "ที่อยู่จัดส่ง", value: 1 },
  { label: "วิธีการจ่ายเงิน", value: 2 },
  { label: "ถอนเงิน", value: 3 },
];

const Address = [
  {
    id: "0",
    name: "นายคเณศ บุญศิริ",
    addressName: "",
    phone: "0981597450",
    address: "คอนโดสวนธน ซอยพุทธบูชา 47",
    province: "กรุงเทพมหานคร",
    zip: "10140",
  },
  {
    id: "1",
    name: "นายพุฒิพงศ์ แซ่ลู่",
    addressName: "",
    phone: "0831464895",
    address: "Mixue ซอยพุทธบูชา 45",
    province: "กรุงเทพมหานคร",
    zip: "10140",
  },
];

const paymentMethod = [
  {
    id: "0",
    // img: masterCard,
    cardName: "Master card",
    cardId: "1234567891011121",
    cardExp: "",
    cardCVV: "",
    ownCard: "",
  },
  {
    id: "1",
    // img: visa,
    cardName: "Visa",
    cardId: "1234567891011121",
    cardExp: "",
    cardCVV: "",
    ownCard: "",
  },
  {
    id: "2",
    // img: kbank,
    cardName: "ธนาคารกสิกรไทย",
    cardId: "1234567891011121",
    cardExp: "",
    cardCVV: "",
    ownCard: "",
  },
];

const bankAccount = [
  {
    id: "0",
    // img: kbank,
    ownAccount: "",
    bankName: "ธนาคารกสิกรไทย",
    accountNumber: "1234567891011121",
  },
  {
    id: "1",
    // img: ttb,
    ownAccount: "",
    bankName: "ธนาคารทหารไทย",
    accountNumber: "1234567891011121",
  },
];

const withdrawMoney = [
  {
    id: "0",
    ownAccount: "",
    bankName: "ธนาคารกสิกรไทย",
    accountNumber: "1234567891011121",
  },
];

// fillter ใน backend
function setting() {
  //set Tab
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  //set Address
  const [selectedAddress, setSelectedAddress] = useState(null);

  const toggleSelectAddress = (index) => {
    setSelectedAddress((prevSelectedAddress) => {
      if (addresses.length === 1) {
        return prevSelectedAddress !== null ? prevSelectedAddress : 0;
      }
      return prevSelectedAddress === index ? null : index;
    });
  };

  //set Payment
  const [selectedPayment, setSelectedPayment] = useState(null);

  const toggleSelectPayment = (index) => {
    setSelectedPayment((prevSelectedPayment) => {
      if (paymentMethods.length === 1) {
        return prevSelectedPayment !== null ? prevSelectedPayment : 0;
      }
      return prevSelectedPayment === index ? null : index;
    });
  };

  //set Bank
  const [selectedBank, setSelectedBank] = useState(null);

  const toggleSelectBank = (index) => {
    setSelectedBank((prevSelectedBank) => {
      if (bankAccounts.length === 1) {
        return prevSelectedBank !== null ? prevSelectedBank : 0;
      }
      return prevSelectedBank === index ? null : index;
    });
  };

  //set Withdraw Money
  const [selectedWithdrawMethod, setSelectedWithdrawMethod] = useState(null);

  const toggleSelectWithdrawMethod = (index) => {
    setSelectedWithdrawMethod((prevSelectedWithdrawMethod) => {
      if (bankAccounts.length === 1) {
        return prevSelectedWithdrawMethod !== null
          ? prevSelectedWithdrawMethod
          : 0;
      }
      return prevSelectedWithdrawMethod === index ? null : index;
    });
  };

  useEffect(() => {
    // console.log("Current Tab:", tab);
    // console.log("Toggle Tab Clicked!");
    // console.log("Selected Address:", selectedAddress);
    if (addresses.length > 0 && selectedAddress === null) {
      setSelectedAddress(0);
    }

    if (
      (paymentMethods.length > 0 && selectedPayment === null) ||
      (bankAccounts.length > 0 && selectedBank === null)
    ) {
      setSelectedPayment(0);
    }

    if (withdrawMoneys.length > 0 && selectedWithdrawMethod === null) {
      setSelectedWithdrawMethod(0);
    }
  }, [
    tab,
    selectedAddress,
    selectedPayment,
    selectedBank,
    selectedWithdrawMethod,
  ]);

  //add address
  const [addAddress, setAddAddress] = useState(false);

  const [addresses, setAddresses] = useState(Address);

  const [newAddress, setNewAddress] = useState({
    id: (parseInt(addresses[addresses.length - 1].id) + 1).toString(),
    name: "",
    addressName: "",
    phone: "",
    address: "",
    province: "",
    zip: "",
  });

  const saveAddress = () => {
    if (
      newAddress.name &&
      newAddress.addressName &&
      newAddress.phone &&
      newAddress.address &&
      newAddress.province &&
      newAddress.zip
    ) {
      const updatedAddresses = [...addresses, newAddress];
      setAddresses(updatedAddresses);
      setNewAddress({
        id: (parseInt(addresses[addresses.length - 1].id) + 1).toString(),
        name: "",
        addressName: "",
        phone: "",
        address: "",
        province: "",
        zip: "",
      });
      setAddAddress(false);
    } else {
      alert("กรอกข้อมูล");
    }
  };

  //add payment
  const [addPayment, setAddPayment] = useState(false);

  const [paymentMethods, setPaymentMethods] = useState(paymentMethod);

  const [newPayment, setNewPayment] = useState({
    id: (parseInt(paymentMethods[paymentMethods.length - 1].id) + 1).toString(),
    cardId: "",
    cardExp: "",
    cardCVV: "",
    ownCardName: "",
  });

  const savePayment = () => {
    if (
      newPayment.cardId &&
      newPayment.cardExp &&
      newPayment.cardCVV &&
      newPayment.ownCard
    ) {
      const updatedPayment = [...paymentMethods, newPayment];
      setPaymentMethods(updatedPayment);
      setNewPayment({
        id: (
          parseInt(paymentMethods[paymentMethods.length - 1].id) + 1
        ).toString(),
        cardId: "",
        cardExp: "",
        cardCVV: "",
        ownCard: "",
      });
      setAddPayment(false);
    } else {
      alert("กรอกข้อมูล");
    }
  };

  //add bankAccount
  const [addBank, setAddBank] = useState(false);

  const [bankAccounts, setBankAccounts] = useState(bankAccount);

  const [newBank, setNewBank] = useState({
    id: (parseInt(bankAccounts[bankAccounts.length - 1].id) + 1).toString(),
    bankName: "",
    ownAccount: "",
    accountNumber: "",
  });

  const saveBank = () => {
    if (newBank.ownAccount && newBank.bankName && newBank.accountNumber) {
      const updatedBank = [...bankAccounts, newBank];
      setBankAccounts(updatedBank);
      setNewBank({
        id: (parseInt(bankAccounts[bankAccounts.length - 1].id) + 1).toString(),
        bankName: "",
        ownAccount: "",
        accountNumber: "",
      });
      setAddBank(false);
    } else {
      alert("กรอกข้อมูล");
    }
  };

  //add withdrawMethod
  const [addWithdrawMethod, setAddWithdrawMethod] = useState(false);

  const [withdrawMoneys, setWithdrawMoneys] = useState(withdrawMoney);

  const [newWithdrawMethod, setNewWithdrawMethod] = useState({
    id: (parseInt(withdrawMoneys[withdrawMoneys.length - 1].id) + 1).toString(),
    bankName: "",
    ownAccount: "",
    accountNumber: "",
  });

  const saveWithdrawMethod = () => {
    if (
      newWithdrawMethod.ownAccount &&
      newWithdrawMethod.bankName &&
      newWithdrawMethod.accountNumber
    ) {
      const updatedWithdrawMethod = [...withdrawMoneys, newWithdrawMethod];
      setWithdrawMoneys(updatedWithdrawMethod);
      setNewWithdrawMethod({
        id: (
          parseInt(withdrawMoneys[withdrawMoneys.length - 1].id) + 1
        ).toString(),
        bankName: "",
        ownAccount: "",
        accountNumber: "",
      });
      setAddWithdrawMethod(false);
    } else {
      alert("กรอกข้อมูล");
    }
  };

  //ใช้เปิด-ปิดฟอร์ม
  const [editAddressForm, setEditAddressForm] = useState("");
  const [editPaymentForm, setEditPaymentForm] = useState("");
  const [editBankForm, setEditBankForm] = useState("");
  const [editWithdrawForm, setEditWithdrawForm] = useState("");

  //edit address
  const [editedAddress, setEditedAddress] = useState({});
  const handleEditAddress = (id) => {
    setEditAddressForm(id);
    const editedAddress = addresses.find((address) => address.id === id);
    setEditedAddress({
      ...editedAddress,
      [id]: { ...editedAddress, id: id },
    });
    // editAddressForm(false);
    // setAddAddress(false);
  };
  const handleSaveAddress = () => {
    const updatedAddresses = addresses.map((address) =>
      address.id === editedAddress.id ? editedAddress : address
    );
    setAddresses(updatedAddresses);
  };

  //edit payment
  const [editedPayment, setEditedPayment] = useState({});
  const handleEditPayment = (id) => {
    setEditPaymentForm(id);
    const editedPayment = paymentMethods.find((payment) => payment.id === id);
    setEditedPayment({
      ...editedPayment,
      [id]: { ...editedPayment, id: id },
    });
  };
  const handleSavePayment = () => {
    const updatedPayment = paymentMethods.map((payment) =>
      payment.id === editedPayment.id ? editedPayment : payment
    );
    setPaymentMethods(updatedPayment);
  };

  //edit bankaccount
  const [editedBank, setEditedBank] = useState({});
  const handleEditBank = (id) => {
    setEditBankForm(id);
    const editedBank = bankAccounts.find((bank) => bank.id === id);
    setEditedBank({
      ...editedBank,
      [id]: { ...editedBank, id: id },
    });
  };
  const handleSaveBank = () => {
    const updatedBank = bankAccounts.map((bank) =>
      bank.id === editedBank.id ? editedBank : bank
    );
    setBankAccounts(updatedBank);
  };

  //edit withdraw
  const [editedWithdraw, setEditedWithdraw] = useState({});
  const handleEditWithdrawMethod = (id) => {
    setEditWithdrawForm(id);
    const editedWithdraw = withdrawMoneys.find(
      (withdraw) => withdraw.id === id
    );
    setEditedWithdraw({
      ...editedWithdraw,
      [id]: { ...editedWithdraw, id: id },
    });
  };
  const handleSaveWithdrawMethod = () => {
    const updatedWithdrawMethod = withdrawMoneys.map((withdraw) =>
      withdraw.id === editedWithdraw.id ? editedWithdraw : withdraw
    );
    setWithdrawMoneys(updatedWithdrawMethod);
  };

  //scroll
  const scrollToAddAddress = useRef(null);
  const scrollToEditAddress = useRef(null);

  const scrollToAddCreditPayment = useRef(null);
  const scrollToEditCreditPayment = useRef(null);

  const scrollToAddBankPayment = useRef(null);
  const scrollToEditBankPayment = useRef(null);

  const scrollToAddBankWithdraw = useRef(null);
  const scrollToEditBankWithdraw = useRef(null);

  useEffect(() => {
    if (addAddress && scrollToAddAddress.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToAddAddress.current.clientHeight;
      const scrollPosition = scrollToAddAddress.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    if (editedAddress && scrollToEditAddress.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToEditAddress.current.clientHeight;
      const scrollPosition = scrollToEditAddress.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    if (addPayment && scrollToAddCreditPayment.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToAddCreditPayment.current.clientHeight;
      const scrollPosition = scrollToAddCreditPayment.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    if (editedPayment && scrollToEditCreditPayment.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToEditCreditPayment.current.clientHeight;
      const scrollPosition = scrollToEditCreditPayment.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    if (addBank && scrollToAddBankPayment.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToAddBankPayment.current.clientHeight;
      const scrollPosition = scrollToAddBankPayment.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    if (editedBank && scrollToEditBankPayment.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToEditBankPayment.current.clientHeight;
      const scrollPosition = scrollToEditBankPayment.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    if (addWithdrawMethod && scrollToAddBankWithdraw.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToAddBankWithdraw.current.clientHeight;
      const scrollPosition = scrollToAddBankWithdraw.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    if (editedWithdraw && scrollToEditBankWithdraw.current) {
      const windowHeight = window.innerHeight;
      const elementHeight = scrollToEditBankWithdraw.current.clientHeight;
      const scrollPosition = scrollToEditBankWithdraw.current.offsetTop - (windowHeight - elementHeight) / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  }, [
    addAddress,
    editedAddress,
    addPayment,
    editedPayment,
    addBank,
    editedBank,
    addWithdrawMethod,
    editedWithdraw
  ]);

  return (
    <Layout>
      <div className="user-page">
        <Sidebar />
        <div className="user-content">
          <div className="buy-page-title kanit-Display-Large">การตั้งค่า</div>

          <Tabs
            tabMenu={tabItems}
            active={tab}
            onClick={(selectrdTab) => toggleTab(selectrdTab)}
          ></Tabs>

          <div className={tab === 1 ? "active-content" : "content"}>
            <div className="setting-tab-group">
              <div className="background-data-table">
                <div className="setting-title-add">
                  <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>
                  <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => {
                      setAddAddress(true),
                        setEditAddressForm(null);
                        // scrollToAddAddress.current?.scrollIntoView({
                        //   behavior: "smooth",
                        // });
                    }}
                  >
                    <img src={add} className="add-icon"></img>
                    เพิ่มที่อยู่
                  </Link>
                </div>
                <div className="my-address">
                  {addresses.map((address, index) => (
                    <div
                      className={`address-item ${
                        selectedAddress === index ? "select" : ""
                      }`}
                      key={index}
                    >
                      <div className="text-address kanit-paragraphtextMedium">
                        <p>
                          {address.name} {address.phone}
                        </p>
                        <p>
                          {address.address} {address.province} {address.zip}
                        </p>
                      </div>

                      <div className="btn-setting-address-group">
                        <button
                          className="f-btn btn-small-primary kanit-paragraphMedium"
                          onClick={() => {
                            handleEditAddress(address.id),
                              setAddAddress(false);
                              // scrollToEditAddress.current?.scrollIntoView({
                              //   behavior: "smooth",
                              // });
                          }}
                        >
                          แก้ไข
                        </button>
                        <button
                          className={`s-btn ${
                            selectedAddress === index
                              ? "btn-small-secondary-disabled"
                              : "btn-small-secondary"
                          } kanit-paragraphMedium`}
                          onClick={() => toggleSelectAddress(index)}
                        >
                          ตั้งเป็นค่าเริ่มต้น
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="setting-add-edit-group">
                {editAddressForm &&
                  addresses.map((address) => (
                    <div className="w-100" key={address.id}>
                      {editAddressForm === address.id ? (
                        <div
                          ref={scrollToEditAddress}
                          className="setting-add-address"
                        >
                          <div className="setting-title-add">
                            <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>
                            <button className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                              ลบ
                            </button>
                          </div>
                          <div className="setting-add-address-form">
                            <Form>
                              <Row className="setting-add-address-form-row">
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="ชื่อที่อยู่"
                                    value={
                                      editedAddress.addressName ||
                                      address.addressName
                                    }
                                    type="text"
                                    errorMessage=""
                                    onChange={(e) =>
                                      setEditedAddress({
                                        ...editedAddress,
                                        addressName: e.target.value,
                                      })
                                    }
                                  />
                                </Col>
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="ชื่อ นามสกุล"
                                    value={editedAddress.name || address.name}
                                    type="text"
                                    errorMessage=""
                                    onChange={(e) =>
                                      setEditedAddress({
                                        ...editedAddress,
                                        name: e.target.value,
                                      })
                                    }
                                  />
                                </Col>
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="เบอร์โทร"
                                    value={editedAddress.phone || address.phone}
                                    type="number"
                                    errorMessage=""
                                    onChange={(e) =>
                                      setEditedAddress({
                                        ...editedAddress,
                                        phone: e.target.value,
                                      })
                                    }
                                  />
                                </Col>
                              </Row>
                              <Input
                                className=""
                                placeholder="บ้านเลขที่ ซอย หมู่"
                                value={editedAddress.address || address.address}
                                type="text"
                                errorMessage=""
                                onChange={(e) =>
                                  setEditedAddress({
                                    ...editedAddress,
                                    address: e.target.value,
                                  })
                                }
                              />
                              <Row className="setting-add-address-form-row">
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="ตำบล อำเภอ จังหวัด"
                                    value={
                                      editedAddress.province || address.province
                                    }
                                    type="text"
                                    errorMessage=""
                                    onChange={(e) =>
                                      setEditedAddress({
                                        ...editedAddress,
                                        province: e.target.value,
                                      })
                                    }
                                  />
                                </Col>
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="รหัสไปรษณีย์"
                                    value={editedAddress.zip || address.zip}
                                    type="number"
                                    errorMessage=""
                                    onChange={(e) =>
                                      setEditedAddress({
                                        ...editedAddress,
                                        zip: e.target.value,
                                      })
                                    }
                                  />
                                </Col>
                              </Row>
                            </Form>
                          </div>
                          <div className="setting-add-address-button">
                            <button
                              className="btn-small-secondary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => setEditAddressForm(null)}
                            >
                              ยกเลิก
                            </button>
                            <button
                              className="btn-small-primary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => {
                                handleSaveAddress(address.id),
                                  setEditAddressForm(null),
                                  console.log(address.id, editedAddress.id),
                                  console.log(address.zip, editedAddress.zip);
                              }}
                            >
                              บันทึก
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
              {addAddress && (
                // <div className="setting-add-address">
                <div ref={scrollToAddAddress} className="setting-add-address">
                  <div className="setting-add-address-title kanit-paragraphBig">
                    ที่อยู่ใหม่
                  </div>
                  <div className="setting-add-address-form">
                    <Form>
                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="ชื่อที่อยู่"
                            value={newAddress.addressName}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              // setAddressname(e.target.value);
                              setNewAddress({
                                ...newAddress,
                                addressName: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="ชื่อ นามสกุล"
                            value={newAddress.name}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              // setUsername(e.target.value);
                              setNewAddress({
                                ...newAddress,
                                name: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="เบอร์โทร"
                            value={newAddress.phone}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setNewAddress({
                                ...newAddress,
                                phone: e.target.value,
                              });
                            }}
                          />
                        </Col>
                      </Row>
                      <Input
                        className=""
                        placeholder="บ้านเลขที่ ซอย หมู่"
                        value={newAddress.address}
                        type="text"
                        errorMessage=""
                        onChange={(e) => {
                          setNewAddress({
                            ...newAddress,
                            address: e.target.value,
                          });
                        }}
                      />
                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="ตำบล อำเภอ จังหวัด"
                            value={newAddress.province}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setNewAddress({
                                ...newAddress,
                                province: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="รหัสไปรษณีย์"
                            value={newAddress.zip}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setNewAddress({
                                ...newAddress,
                                zip: e.target.value,
                              });
                            }}
                          />
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  <div className="setting-add-address-button">
                    <button
                      className="btn-small-secondary kanit-paragraphMedium"
                      type="submit"
                      onClick={() => setAddAddress(false)}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={saveAddress}
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={tab === 2 ? "active-content" : "content"}>
            <div className="setting-tab-group">
              <div className="background-data-table">
                <div className="setting-title-add">
                  <p className="kanit-paragraphBig">
                    บัตรเครดิต/บัตรเดบิต/บัญชีธนาคาร
                  </p>
                  <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => {
                      setAddPayment(true),
                        setEditPaymentForm(null),
                        setAddBank(false),
                        setEditBankForm(null);
                    }}
                  >
                    <img src={add} className="add-icon"></img>
                    เพิ่มบัตร/บัญชี
                  </Link>
                </div>

                <div className="my-address">
                  {paymentMethods.map((payment, index) => (
                    <div
                      className={`address-item ${
                        selectedPayment === index ? "select" : ""
                      }`}
                      key={index}
                    >
                      <div className="text-address kanit-paragraphMedium">
                        <div className="img-card-cardid">
                          <div className="card-name">{payment.cardName}</div>
                          <div className="card-id">{payment.cardId}</div>
                        </div>
                      </div>

                      <div className="btn-setting-address-group">
                        <button
                          className="f-btn btn-small-primary kanit-paragraphMedium"
                          onClick={() => {
                            handleEditPayment(payment.id),
                              setAddPayment(false),
                              setAddBank(false),
                              setEditBankForm(null);
                          }}
                        >
                          แก้ไข
                        </button>
                        <button
                          className={`s-btn ${
                            selectedPayment === index
                              ? "btn-small-secondary-disabled"
                              : "btn-small-secondary"
                          } kanit-paragraphMedium`}
                          onClick={() => toggleSelectPayment(index)}
                        >
                          ตั้งเป็นค่าเริ่มต้น
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="setting-add-edit-group">
                {editPaymentForm &&
                  paymentMethods.map((payment) => (
                    <div className="w-100" key={payment.id}>
                      {editPaymentForm === payment.id ? (
                        <div ref={scrollToEditCreditPayment} className="setting-add-address">
                          <div className="setting-title-add">
                            <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>
                            <button className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                              ลบ
                            </button>
                          </div>
                          <div className="setting-add-address-form">
                            <Form>
                              <Row className="setting-add-address-form-row">
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="ประเภทของบัตร"
                                    value={
                                      editedPayment.cardName || payment.cardName
                                    }
                                    type="text"
                                    errorMessage=""
                                    onChange={(e) => {
                                      setEditedPayment({
                                        ...editedPayment,
                                        cardName: e.target.value,
                                      });
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="หมายเลขบัตร"
                                    value={
                                      editedPayment.cardId || payment.cardId
                                    }
                                    type="number"
                                    errorMessage=""
                                    onChange={(e) => {
                                      setEditedPayment({
                                        ...editedPayment,
                                        cardId: e.target.value,
                                      });
                                    }}
                                  />
                                </Col>
                              </Row>

                              <Row className="setting-add-address-form-row">
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="วันหมดอายุ (ดด/ปป)"
                                    value={
                                      editedPayment.cardExp || payment.cardExp
                                    }
                                    type="text"
                                    errorMessage=""
                                    onChange={(e) => {
                                      setEditedPayment({
                                        ...editedPayment,
                                        cardExp: e.target.value,
                                      });
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Input
                                    className=""
                                    placeholder="CVV"
                                    value={
                                      editedPayment.cardCVV || payment.cardCVV
                                    }
                                    type="number"
                                    errorMessage=""
                                    onChange={(e) => {
                                      setEditedPayment({
                                        ...editedPayment,
                                        cardCVV: e.target.value,
                                      });
                                    }}
                                  />
                                </Col>
                              </Row>
                              <Input
                                className=""
                                placeholder="ชื่อเจ้าของบัตร"
                                value={editedPayment.ownCard || payment.ownCard}
                                type="text"
                                errorMessage=""
                                onChange={(e) => {
                                  setEditedPayment({
                                    ...editedPayment,
                                    ownCard: e.target.value,
                                  });
                                }}
                              />
                            </Form>
                          </div>
                          <div className="setting-add-address-button">
                            <button
                              className="btn-small-secondary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => setEditPaymentForm(false)}
                            >
                              ยกเลิก
                            </button>
                            <button
                              className="btn-small-primary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => {
                                handleSavePayment(payment.id),
                                  setEditPaymentForm(false);
                              }}
                            >
                              บันทึก
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
              {addPayment && (
                <div ref={scrollToAddCreditPayment} className="setting-add-address">
                  <div className="setting-add-address-title kanit-paragraphBig">
                    เพิ่มบัตร
                  </div>
                  <div className="setting-add-address-form">
                    <Form>
                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="ประเภทของบัตร"
                            value={newPayment.cardName}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setNewPayment({
                                ...newPayment,
                                cardName: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="หมายเลขบัตร"
                            value={newPayment.cardId}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setNewPayment({
                                ...newPayment,
                                cardId: e.target.value,
                              });
                            }}
                          />
                        </Col>
                      </Row>

                      <Row className="setting-add-address-form-row">
                        <Col>
                          <Input
                            className=""
                            placeholder="วันหมดอายุ (ดด/ปป)"
                            value={newPayment.cardExp}
                            type="text"
                            errorMessage=""
                            onChange={(e) => {
                              setNewPayment({
                                ...newPayment,
                                cardExp: e.target.value,
                              });
                            }}
                          />
                        </Col>
                        <Col>
                          <Input
                            className=""
                            placeholder="CVV"
                            value={newPayment.cardCVV}
                            type="number"
                            errorMessage=""
                            onChange={(e) => {
                              setNewPayment({
                                ...newPayment,
                                cardCVV: e.target.value,
                              });
                            }}
                          />
                        </Col>
                      </Row>
                      <Input
                        className=""
                        placeholder="ชื่อเจ้าของบัตร"
                        value={newPayment.ownCard}
                        type="text"
                        errorMessage=""
                        onChange={(e) => {
                          setNewPayment({
                            ...newPayment,
                            ownCard: e.target.value,
                          });
                        }}
                      />
                    </Form>
                  </div>
                  <div className="setting-add-address-button">
                    <button
                      className="btn-small-secondary kanit-paragraphMedium"
                      type="submit"
                      onClick={() => setAddPayment(false)}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={savePayment}
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              )}
              <div className="background-data-table">
                <div className="setting-title-add">
                  <p className="kanit-paragraphBig">บัญชีธนาคาร</p>

                  <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => {
                      setAddBank(true),
                        setEditPaymentForm(null),
                        setAddPayment(false),
                        setEditBankForm(null);
                    }}
                  >
                    <img src={add} className="add-icon"></img>
                    เพิ่มบัญชีธนาคาร
                  </Link>
                </div>

                <div className="my-address">
                  <div className="my-address">
                    {bankAccounts.map((bank, index) => (
                      <div
                        className={`address-item ${
                          selectedBank === index ? "select" : ""
                        }`}
                        key={index}
                      >
                        <div className="text-address kanit-paragraphMedium">
                          <div className="img-card-cardid">
                            <div className="card-name">{bank.bankName}</div>
                            <div className="card-id">{bank.accountNumber}</div>
                          </div>
                        </div>
                        <div className="btn-setting-address-group">
                          <button
                            className="f-btn btn-small-primary kanit-paragraphMedium"
                            onClick={() => {
                              handleEditBank(bank.id),
                                setAddPayment(false),
                                setAddBank(false),
                                setEditPaymentForm(null);
                            }}
                          >
                            แก้ไข
                          </button>
                          <button
                            className={`s-btn ${
                              selectedBank === index
                                ? "btn-small-secondary-disabled"
                                : "btn-small-secondary"
                            } kanit-paragraphMedium`}
                            onClick={() => toggleSelectBank(index)}
                          >
                            ตั้งเป็นค่าเริ่มต้น
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="setting-add-edit-group">
                {editBankForm &&
                  bankAccounts.map((bank) => (
                    <div className="w-100" key={bank.id}>
                      {editBankForm === bank.id ? (
                        <div ref={scrollToEditBankPayment} className="setting-add-address">
                          <div className="setting-title-add">
                            <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>
                            <button className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                              ลบ
                            </button>
                          </div>
                          <div className="setting-add-address-form">
                            <Form>
                              <Row className="setting-add-address-form-row">
                                <Input
                                  className=""
                                  placeholder="ธนาคาร"
                                  value={editedBank.bankName || bank.bankName}
                                  type="text"
                                  errorMessage=""
                                  onChange={(e) => {
                                    setEditedBank({
                                      ...editedBank,
                                      bankName: e.target.value,
                                    });
                                  }}
                                />
                              </Row>
                              <Input
                                className=""
                                placeholder="ชื่อ"
                                value={editedBank.ownAccount || bank.ownAccount}
                                type="text"
                                errorMessage=""
                                onChange={(e) => {
                                  setEditedBank({
                                    ...editedBank,
                                    ownAccount: e.target.value,
                                  });
                                }}
                              />
                              <Row className="setting-add-address-form-row">
                                <Input
                                  className=""
                                  placeholder="หมายเลขบัญชีธนาคาร"
                                  value={
                                    editedBank.accountNumber ||
                                    bank.accountNumber
                                  }
                                  type="number"
                                  errorMessage=""
                                  onChange={(e) => {
                                    setEditedBank({
                                      ...editedBank,
                                      accountNumber: e.target.value,
                                    });
                                  }}
                                />
                              </Row>
                            </Form>
                          </div>
                          <div className="setting-add-address-button">
                            <button
                              className="btn-small-secondary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => setEditBankForm(false)}
                            >
                              ยกเลิก
                            </button>
                            <button
                              className="btn-small-primary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => {
                                handleSaveBank(bank.id), setEditBankForm(false);
                              }}
                            >
                              บันทึก
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
              {addBank && (
                <div ref={scrollToAddBankPayment} className="setting-add-address">
                  <div className="setting-add-address-title kanit-paragraphBig">
                    เพิ่มบัญชีธนาคาร
                  </div>
                  <div className="setting-add-address-form">
                    <Form>
                      <Row className="setting-add-address-form-row">
                        <Input
                          className=""
                          placeholder="ธนาคาร"
                          value={newBank.bankName}
                          type="text"
                          errorMessage=""
                          onChange={(e) => {
                            setNewBank({
                              ...newBank,
                              bankName: e.target.value,
                            });
                          }}
                        />
                      </Row>
                      <Input
                        className=""
                        placeholder="ชื่อ"
                        value={newBank.ownAccount}
                        type="text"
                        errorMessage=""
                        onChange={(e) => {
                          setNewBank({
                            ...newBank,
                            ownAccount: e.target.value,
                          });
                        }}
                      />
                      <Row className="setting-add-address-form-row">
                        <Input
                          className=""
                          placeholder="หมายเลขบัญชีธนาคาร"
                          value={newBank.accountNumber}
                          type="number"
                          errorMessage=""
                          onChange={(e) => {
                            setNewBank({
                              ...newBank,
                              accountNumber: e.target.value,
                            });
                          }}
                        />
                      </Row>
                    </Form>
                  </div>
                  <div className="setting-add-address-button">
                    <button
                      className="btn-small-secondary kanit-paragraphMedium"
                      type="submit"
                      onClick={() => setAddBank(false)}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={saveBank}
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={tab === 3 ? "active-content" : "content"}>
            <div className="setting-tab-group">
              <div className="background-data-table">
                <div className="setting-title-add">
                  <p className="kanit-paragraphBig">บัญชีธนาคาร</p>

                  <Link
                    className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium"
                    onClick={() => {
                      setAddWithdrawMethod(true), setEditWithdrawForm(null);
                    }}
                  >
                    <img src={add} className="add-icon"></img>
                    เพิ่มบัญชีธนาคาร
                  </Link>
                </div>

                <div className="my-address">
                  <div className="my-address">
                    {withdrawMoneys.map((withdraw, index) => (
                      <div
                        className={`address-item ${
                          selectedWithdrawMethod === index ? "select" : ""
                        }`}
                        key={index}
                      >
                        <div className="text-address kanit-paragraphMedium">
                          <div className="img-card-cardid">
                            <div className="card-name">{withdraw.bankName}</div>
                            <div className="card-id">
                              {withdraw.accountNumber}
                            </div>
                          </div>
                        </div>
                        <div className="btn-setting-address-group">
                          <button
                            className="f-btn btn-small-primary kanit-paragraphMedium"
                            onClick={() => {
                              handleEditWithdrawMethod(withdraw.id),
                                setAddWithdrawMethod(false);
                            }}
                          >
                            แก้ไข
                          </button>
                          <button
                            className={`s-btn ${
                              selectedWithdrawMethod === index
                                ? "btn-small-secondary-disabled"
                                : "btn-small-secondary"
                            } kanit-paragraphMedium`}
                            onClick={() => toggleSelectWithdrawMethod(index)}
                          >
                            ตั้งเป็นค่าเริ่มต้น
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="setting-add-edit-group">
                {editWithdrawForm &&
                  withdrawMoneys.map((withdraw) => (
                    <div className="w-100" key={withdraw.id}>
                      {editWithdrawForm === withdraw.id ? (
                        <div ref={scrollToEditBankWithdraw} className="setting-add-address">
                          <div className="setting-title-add">
                            <p className="kanit-paragraphBig">ที่อยู่จัดส่ง</p>
                            <button className="add-product-user-page btn-small-link-ghost kanit-paragraphMedium">
                              ลบ
                            </button>
                          </div>
                          <div className="setting-add-address-form">
                            <Form>
                              <Row className="setting-add-address-form-row">
                                <Input
                                  className=""
                                  placeholder="ธนาคาร"
                                  value={
                                    editedWithdraw.bankName || withdraw.bankName
                                  }
                                  type="text"
                                  errorMessage=""
                                  onChange={(e) => {
                                    setEditedWithdraw({
                                      ...editedWithdraw,
                                      bankName: e.target.value,
                                    });
                                  }}
                                />
                              </Row>
                              <Input
                                className=""
                                placeholder="ชื่อ"
                                value={
                                  editedWithdraw.ownAccount ||
                                  withdraw.ownAccount
                                }
                                type="text"
                                errorMessage=""
                                onChange={(e) => {
                                  setEditedWithdraw({
                                    ...editedWithdraw,
                                    ownAccount: e.target.value,
                                  });
                                }}
                              />
                              <Row className="setting-add-address-form-row">
                                <Input
                                  className=""
                                  placeholder="หมายเลขบัญชีธนาคาร"
                                  value={
                                    editedWithdraw.accountNumber ||
                                    withdraw.accountNumber
                                  }
                                  type="number"
                                  errorMessage=""
                                  onChange={(e) => {
                                    setEditedWithdraw({
                                      ...editedWithdraw,
                                      accountNumber: e.target.value,
                                    });
                                  }}
                                />
                              </Row>
                            </Form>
                          </div>
                          <div className="setting-add-address-button">
                            <button
                              className="btn-small-secondary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => setEditWithdrawForm(false)}
                            >
                              ยกเลิก
                            </button>
                            <button
                              className="btn-small-primary kanit-paragraphMedium"
                              type="submit"
                              onClick={() => {
                                handleSaveWithdrawMethod(withdraw.id),
                                  setEditWithdrawForm(false);
                              }}
                            >
                              บันทึก
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
              {addWithdrawMethod && (
                <div ref={scrollToAddBankWithdraw} className="setting-add-address">
                  <div className="setting-add-address-title kanit-paragraphBig">
                    เพิ่มบัญชีธนาคาร
                  </div>
                  <div className="setting-add-address-form">
                    <Form>
                      <Row className="setting-add-address-form-row">
                        <Input
                          className=""
                          placeholder="ธนาคาร"
                          value={newWithdrawMethod.bankName}
                          type="text"
                          errorMessage=""
                          onChange={(e) => {
                            setNewWithdrawMethod({
                              ...newWithdrawMethod,
                              bankName: e.target.value,
                            });
                          }}
                        />
                      </Row>
                      <Input
                        className=""
                        placeholder="ชื่อ"
                        value={newWithdrawMethod.ownAccount}
                        type="text"
                        errorMessage=""
                        onChange={(e) => {
                          setNewWithdrawMethod({
                            ...newWithdrawMethod,
                            ownAccount: e.target.value,
                          });
                        }}
                      />
                      <Row className="setting-add-address-form-row">
                        <Input
                          className=""
                          placeholder="หมายเลขบัญชีธนาคาร"
                          value={newWithdrawMethod.accountNumber}
                          type="number"
                          errorMessage=""
                          onChange={(e) => {
                            setNewWithdrawMethod({
                              ...newWithdrawMethod,
                              accountNumber: e.target.value,
                            });
                          }}
                        />
                      </Row>
                    </Form>
                  </div>
                  <div className="setting-add-address-button">
                    <button
                      className="btn-small-secondary kanit-paragraphMedium"
                      type="submit"
                      onClick={() => setAddWithdrawMethod(false)}
                    >
                      ยกเลิก
                    </button>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={saveWithdrawMethod}
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default setting;
