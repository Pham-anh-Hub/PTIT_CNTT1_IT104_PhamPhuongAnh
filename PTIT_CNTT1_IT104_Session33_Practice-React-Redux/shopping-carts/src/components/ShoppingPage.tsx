import React from "react";
import ShoppingCart from "./ShoppingCart";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingPage() {
  return (
    <div>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
            <ShoppingItem/>
            <ShoppingCart/>
        </div>
      </div>
    </div>
  );
}
