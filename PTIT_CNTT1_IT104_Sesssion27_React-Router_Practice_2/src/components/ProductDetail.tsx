import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products, type IProducts } from "../data";


export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<IProducts | undefined>(
    undefined
  );

  useEffect(() => {
    if (id) {
      const cloneProduct = products.find(
        (product) => product.id === Number(id)
      );
      console.log(cloneProduct);

      setProductDetail(cloneProduct);
    }
  });

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
        <p>Thông tin sản phẩm</p>
      </div>
      <div className="card-detail">
        <h2>{productDetail?.name}</h2>
        <p>
          <b>Giá:</b> {productDetail?.price.toLocaleString()} VND
        </p>
        <p>
          <b>Mô tả:</b> {productDetail?.description}
        </p>
        <p
          onClick={() => {
            navigate(-1);
          }}
          style={{ color: "#007BFF", cursor: "pointer" }}
        >
          Quay lại danh sách
        </p>
      </div>
    </div>
  );
}
