import React, { useMemo } from "react";
import "../App.css";

type Cart = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function ShoppingCart() {
  const cartList = [
    { id: 1, name: "Product A", price: 15000, quantity: 20 },
    { id: 2, name: "Product B", price: 350000, quantity: 15 },
    { id: 3, name: "Product C", price: 250000, quantity: 10 },
  ];

  const totalCart = (): number => {
    return cartList.reduce((current, cart) => {
      return current + cart.price * cart.quantity;
    }, 0);
  };

  const catchTotal = useMemo(() => totalCart, [cartList]);

  return (
    <div className="Exercise01">
      {cartList.map((cart: Cart) => (
        <div>
          <b>{cart.id}</b>. <b>{cart.name}</b>: <b>{cart.price}</b>
          {"\n Số lượng "}
          <b>{cart.quantity}</b>
        </div>
      ))}
      <b>Tổng tiền {catchTotal().toLocaleString()} VND</b>
    </div>
  );
}
