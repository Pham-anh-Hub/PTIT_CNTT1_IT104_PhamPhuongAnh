import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductInfoDetail() {
  const { id } = useParams();
  const [products, _setProducts] = useState<Product[]>(() => {
    const cloneList = localStorage.getItem("phoneList");
    return cloneList ? JSON.parse(cloneList) : [];
  });
  const [targetProduct, setTargetProduct] = useState<Product>();

  useEffect(() => {
    if (id && products.length > 0) {
      const foundProduct = products.find((p) => p.id === Number(id));
      console.log(foundProduct);

      setTargetProduct(foundProduct);
    }
  }, [id, products]);

  return (
    <div>
      {targetProduct ? (
        <>
          <h1>{targetProduct.name}</h1>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <img
              style={{ width: "35%" }}
              src={targetProduct.image}
              alt={targetProduct.name}
            />
            <div style={{ width: "45%" }}>
              <h3 style={{ fontSize: "40px", color: "#000" }}>
                {targetProduct.name}
              </h3>
              <h3>{targetProduct.price.toLocaleString()} VND</h3>
            </div>
          </div>
        </>
      ) : (
        <p>Không tìm thấy sản phẩm</p>
      )}
    </div>
  );
}
