import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Exercise08() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        margin: "0px auto",
        width: "50%",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Đăng ký tài khoản</h2>
      <div style={{ display: "flex", gap: "15px" }}>
        <Form.Group
          style={{ flex: "1" }}
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" />
        </Form.Group>
        <Form.Group
          style={{ flex: "1" }}
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
      </div>
      <div>
        <Form.Group
          className="mb-3"
          style={{ width: "100%" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control type="" placeholder="Ví dụ: Nguyễn Văn A" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{ width: "100%" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control type="email" placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Group>
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <Form.Group style={{ flex: "1" }}>
          <Form.Label>Thành phố</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Thành phố</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ flex: "1" }}>
          <Form.Label>Quận/Huyện</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Quận/Huyện</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          style={{ flex: "1" }}
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Mã bưu điện</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
      </div>
      <Button variant="primary" style={{ width: "50%", alignSelf: "center" }}>
        Submit
      </Button>
    </div>
  );
}
