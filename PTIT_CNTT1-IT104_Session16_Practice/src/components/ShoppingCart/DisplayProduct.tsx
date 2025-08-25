import React, { Component } from "react";
import "./ShoppingCart.css";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type PropState = {
  productList: Product[];
  // targetPurchase: Product;
  addProduct: (id: string) => void;
};

export default class DisplayProduct extends Component<PropState> {
  constructor(props: PropState) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="list-display">
          {this.props.productList.map((product: Product) => (
            <li>
              <div>
                <img src={product.image} alt="" />
                <div>
                  <p>{product.name}</p>
                  <p>
                    {product.price.toLocaleString()} <u>đ</u>
                  </p>
                  <button
                    onClick={() => this.props.addProduct(product.id)}
                    type="button"
                  >
                    🛒 Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
