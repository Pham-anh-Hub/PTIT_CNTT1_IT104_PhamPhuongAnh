import React from "react";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
    <div
      style={{
        width: "95%",
        margin: "5rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h2>Chào mừng đến với ứng dụng giới thiệu bản thân!</h2>
      <p style={{ fontSize: 15 }}>
        Đây là ứng dụng đương giảm giúp bạn tìm hiểu thêm về toi. Hãy khám phá
        các trang khác để biết thêm chi tiết!
      </p>
    </div>
    </>
  );
}
