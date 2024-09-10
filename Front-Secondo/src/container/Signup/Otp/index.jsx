import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import { Link } from "react-router-dom";

import "./index.css";
import "../../../styles.css";
import "../../../components/UI/Input";

function Otp() {
  const [confirmOtp, setConfirmOtp] = useState("");

  const checkOtp = () => {
    console.log(confirmOtp);
  };

  return (
    <Container className="main-content">
      <Row className="Row-content">
        <Col className="Col-left">
          <div className="Content-left">
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
        <Col className="Col-right">
          <Row className="m-0">
            <div className="Title-sign">
              <div className="kanit-Display-Large space-padding-bot font-color">
                Secondo
              </div>
              <div className="kanit-Display-Medium-R font-color">
                กรอกรหัสยืนยัน
              </div>
            </div>

            <Col className="p-0">
              <Form>
                <Input
                  Label=""
                  placeholder="หมายเลข OTP"
                  value={confirmOtp}
                  type="number"
                  errorMessage=""
                  onChange={(e) => {
                    setConfirmOtp(e.target.value);
                  }}
                />

                <Row className="agreement-law-content">
                  <div className="agreement-law-text kanit-paragraphSmall padding-buttom">
                    พิมพ์รหัสที่ส่งมาทาง SMS เบอร์
                    0800828335(รหัสใช้ได้เพียงครั้งเดียว) ถ้าไม่ได้รับ SMS
                    รหัสยืนยันภายใน 5 นาที สามารถขอรหัสใหม่ หรือ ติดต่อทีมงาน{" "}
                    <br />
                    <Link className="" to="#pricing">
                      ขอรหัสใหม่
                    </Link>
                  </div>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Link to={"/signup"}>
                      <button
                        className="btn-small-primary kanit-paragraphMedium"
                        onClick={checkOtp}
                      >
                        ต่อไป
                      </button>
                    </Link>
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
                      สมัครด้วย Google
                    </button>
                  </Col>
                </Row> */}
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Otp;
