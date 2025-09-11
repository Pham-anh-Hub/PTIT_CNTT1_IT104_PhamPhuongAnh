import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { products, type IProducts } from "../data";

export default function Product() {
 

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <h1>Trang chi tiết sản phẩm</h1>
        <p>Danh sách sản phẩm</p>
      </div>
      <div
        style={{
          margin: "2rem auto",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h2>Danh sách sản phẩm</h2>
        <div className="cards">
          {products.map((product: IProducts, index: number) => (
            <div key={index} className="card">
              <h3>{product.name}</h3>
              <p>Giá: {product.price.toLocaleString()} VND</p>
              <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
