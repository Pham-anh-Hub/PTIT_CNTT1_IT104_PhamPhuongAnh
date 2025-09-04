import React from "react";
import { Dropdown } from "react-bootstrap";

export default function Exercise04() {
  return (
    <div>
      {" "}
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-light"
          style={{ borderColor: "black", color: "black" }}
          id="dropdown-basic"
        >
          Nguyễn Văn A
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
