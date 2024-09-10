import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { Link } from "react-router-dom";

import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions';
import { signup } from '../../actions';

import "./index.css";
import "../../styles.css";
import "../../components/UI/Button/index.css";

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [regisPassword, setRegisPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  // connect api to save data
  const userRegister = (e) => {
    e.preventDefault();

    // console.log(email);
    // console.log(regisPassword);
    const password = regisPassword
    const user = {
        // email: 'riz@gmail.com', 
        // password:'123456'
        firstName, lastName, email, password
    }
    // console.log(user);
    dispatch(signup(user));
    
    // const userlogin = {
    //   email, password
    // }
    // dispatch(login(userlogin));
    // const userlogin = {
    //     email, password
    // }
    // dispatch(login(userlogin));

  };

  // const userLogin = (e) => {
  //   const userlogin = {
  //     email, password
  //   }
  //   dispatch(login(userlogin));
  // }

  // if(auth.authenticate){
  //   return <Navigate to="/" />
  // }

  if(user.signupsuccess){
    // userLogin()
    return <Navigate to="/Signin" />
    // return <p>Loading...!</p>
  }

  return (
    <Container className="main-content">
      <Row className="row-content">
        <Col className="col-left">
          <div className="content-left">
          <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "green",
              }}
            ></div>
            <div className="kanit-Display-Large">
              ซื้อขายและบริจาคสินค้ามือสอง
            </div>
            <div className="kanit-paragraphVerySmall">
              ส่งต่อสิ่งของที่คุณไม่ใช้งาน <br />
              เพื่อเป็นประโยชน์ให้คนที่ต้องการ
            </div>
            <br />
            <div className="kanit-paragraphVerySmall">
              : <br />:
            </div>
          </div>
        </Col>
        <Col className="col-right">
          <Row className="m-0">
            <div className="title-sign">
              <div className="kanit-Display-Large space-padding-bot font-color">
                Secondo
              </div>
              <div className="kanit-Display-Medium-R space-padding-bot font-color">
                สร้างบัญชีของคุณ
              </div>
            </div>

            <Col className="p-0">
              <Form>
                <Row className="row-signup">
                  <Col>
                    <Input
                      Label="ชื่อ"
                      placeholder="ชื่อ"
                      value={firstName}
                      type="text"
                      errorMessage=""
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Col>
                  <Col>
                    <Input
                      Label="นามสกุล"
                      placeholder="นามสกุล"
                      value={lastName}
                      type="text"
                      errorMessage=""
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Input
                  Label="อีเมล"
                  placeholder="อีเมล"
                  value={email}
                  type="email"
                  errorMessage=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Input
                  Label="รหัสผ่าน"
                  placeholder="รหัสผ่าน"
                  value={regisPassword}
                  type="password"
                  errorMessage=""
                  onChange={(e) => {
                    setRegisPassword(e.target.value);
                  }}
                />

                <Input
                  Label="ยืนยันรหัสผ่าน"
                  placeholder="ยืนยันรหัสผ่าน"
                  value={confirmPassword}
                  type="password"
                  errorMessage=""
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />

                {/* <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalCheck"
                  >
                    <Col>
                      <Form.Check label="Remember me" />
                    </Col>
                  </Form.Group> */}

                <Row className="mb-3">
                  <Col>
                    <button
                      className="btn-small-primary kanit-paragraphMedium"
                      type="submit"
                      onClick={userRegister}
                    >
                      สร้างบัญชี
                    </button>
                  </Col>
                </Row>

                {/* <Row className="mb-3">
                  <div className="kanit-paragraphSmall horizontal-divider">
                    or
                  </div>
                </Row> */}

                {/* <Row className="mb-3">
                  <Col>
                    <button className="btn-small-secondary kanit-paragraphMedium">
                      เข้าสู่ระบบด้วย Google
                    </button>
                  </Col>
                </Row> */}

                {/* <Row className="content-3">
                  <div className="agreement-law-text kanit-paragraphSmall">
                    <div>การดำเนินการต่อแสดงว่าคุณได้อ่านและยอมรับ</div>
                    <Link className="" to="#pricing">
                      ข้อกำหนดการใช้งาน
                    </Link>{" "}
                    และ{" "}
                    <Link className="" to="#pricing">
                      นโยบายความเป็นส่วนตัว
                    </Link>
                  </div>

                  <div className="agreement-law-text kanit-paragraphSmall">
                    ยังไม่มีบัญชี Secondo ใช่ไหม{" "}
                    <Link className="" to="/signup">
                      สร้างบัญชีใหม่
                    </Link>
                  </div>
                </Row> */}
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
