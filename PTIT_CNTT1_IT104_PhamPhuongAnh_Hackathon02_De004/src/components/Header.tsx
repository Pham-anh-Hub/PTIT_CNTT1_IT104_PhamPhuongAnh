import { BookOutlined } from "@ant-design/icons";
import React from "react";

export default function Header() {
  return (
    <div
      style={{ backgroundColor: "#000000", color: "#fff", padding: "12px 0px" }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "12px",
          gap: "12px",
        }}
      >
        <BookOutlined style={{ fontSize: "40px" }} />
        <h1>Quản lý sách</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Quản lý, chỉnh sửa và cập nhật danh sách sách trong hệ thống</p>
      </div>
    </div>
  );
}
