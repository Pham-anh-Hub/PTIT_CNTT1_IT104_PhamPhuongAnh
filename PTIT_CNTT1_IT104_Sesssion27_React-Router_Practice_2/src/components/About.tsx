import React from "react";
import Header from "./Header";

export default function About() {
  return (
    <>
    <Header/>
    <div
      style={{
        width: "95%",
        margin: "5rem auto",
        textAlign: "center",
      }}
    >
      <h3>Giới thiệu bản thân</h3>
      <p style={{ textAlign: "center" }}>
        Xin chào! Tôi là{" "}
        <span style={{ color: "#007BFF", fontWeight: "bold" }}>
          Nguyễn Văn B
        </span>
        , một lập trình viên Frontend đầy đam mê. Tôi yêu thích việc xây dựng
        các ứng dụng web hiện đại và tối ưu trải nghiệm người dùng.
      </p>
      <p>
        <span style={{ color: "grey", fontWeight: "bold" }}>Sở thích: </span>Đọc
        sách, viết code và đi du lịch
      </p>
      <p>
        <span style={{ color: "grey", fontWeight: "bold" }}>Mục tiêu: </span>Trở
        thành một lập trình viên xuất sắc và tạo ra những sản phẩm công nghệ có
        giá trị
      </p>
    </div>
    </>
  );
}
