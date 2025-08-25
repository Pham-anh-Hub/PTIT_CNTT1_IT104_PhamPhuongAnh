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
  cartList: { product: Product; quantity: number }[];
  increaseDetail: (id: string) => void;
  decreaseDetail: (id: string) => void;
  calculateTotalCart: () => number;
  handleDeleteCart: (id: string) => void;
  error: string;
};

type StateType = {
  isShowCart: boolean;
};

export default class Header extends Component<PropState, StateType> {
  constructor(props: PropState) {
    super(props);
    this.state = {
      isShowCart: true,
    };
  }
  render() {
    const handleShowCarts = () => {
      this.setState({
        isShowCart: !this.state.isShowCart,
      });
    };
    return (
      <div className="header">
        <div className="left-header">
          <p>Trang chủ</p>
          <p>{"/"}</p>
          <p>Danh sách sản phẩm</p>
        </div>
        <div className="shop-cart">
          <span
            onClick={handleShowCarts}
            style={{ fontSize: "35px", color: "#0d6efd" }}
          >
            🛒
          </span>

          {this.state.isShowCart ? (
            <>
              <div className="purchase-cart">
                <h2>Giỏ hàng của bạn</h2>
                <hr />
                <div className="cart-list">
                  {this.props.cartList.length > 0 ? (
                    <>
                      {this.props.cartList.map((item) => (
                        <div className="cart-detail">
                          <img src={item.product.image} alt="" />
                          <p>{item.product.name}</p>
                          <div className="action-btn">
                            <button
                              onClick={() =>
                                this.props.increaseDetail(item.product.id)
                              }
                              style={{ padding: "5px 10px" }}
                              type="button"
                            >
                              +
                            </button>
                            <p>{item.quantity}</p>
                            <button
                              onClick={() =>
                                this.props.decreaseDetail(item.product.id)
                              }
                              style={{ padding: "5px 10px" }}
                              type="button"
                            >
                              -
                            </button>
                            <button
                              onClick={() =>
                                this.props.handleDeleteCart(item.product.id)
                              }
                              style={{ padding: "5px 10px" }}
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="empty-inform">
                        Giỏ hàng của bạn đang trống
                      </div>
                    </>
                  )}
                </div>
                <hr />
                <div className="error">{this.props.error}</div>
                <div className="total-cart">
                  Tổng tiền: {this.props.calculateTotalCart().toLocaleString()}{" "}
                  <u>đ</u>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="order-quantity">{this.props.cartList.length}</div>
            </>
          )}
        </div>
      </div>
    );
  }
}
