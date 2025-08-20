import React, { Component } from "react";

type PropTypes = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default class ChildrentComponent extends Component<PropTypes> {
  render() {
    // const { id, name, price, quantity } = this.props;
    return (
      <>
        <h2>Dữ liệu trong component con: </h2>
        <div style={{ fontWeight: "500", fontSize: "20px" }}>
          <div>Id: {this.props.id}</div>
          <div>Name: {this.props.name}</div>
          <div>Price: {this.props.price.toLocaleString()} đ</div>
          <div>Quantity: {this.props.quantity}</div>
        </div>
      </>
    );
  }
}
