import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function Exercise02() {
  const [product] = useState<Product>({
    id: 1,
    name: "Bánh mỳ",
    price: 15000,
    quantity: 10,
  });

  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <div>
        <p>
          Id: <b>{product.id}</b>
        </p>
        <p>
          Name: <b>{product.name}</b>
        </p>
        <p>
          Price: <b>{product.price.toLocaleString()} VND</b>
        </p>
        <p>
          Quantity: <b>{product.quantity}</b>
        </p>
      </div>
    </div>
  );
}
