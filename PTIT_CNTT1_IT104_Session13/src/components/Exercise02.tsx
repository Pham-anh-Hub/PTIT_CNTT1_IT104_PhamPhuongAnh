import React, { Component } from "react";

type PropTypes = {
  id?: number;
};

type StateTypes = {
  id: number;
  fullname: string;
  dOb: string;
  address: string;
};

export default class Exercise02 extends Component<PropTypes, StateTypes> {
  constructor(prop: PropTypes) {
    super(prop);

    this.state = {
      id: 8,
      fullname: "Phạm Phương Anh",
      dOb: "08/07/2006",
      address: "Hà Đông, Hà Nội",
    };
  }

  render() {
    return (
      <>
        <div style={{ fontWeight: "bold" }}>
          <h2>Thông tin cá nhân: </h2>
          <div>id: {this.state.id}</div>
          <div>Tên: {this.state.fullname} </div>
          <div>Ngày sinh: {this.state.dOb}</div>
          <div>Địa chỉ: {this.state.address}</div>
        </div>
      </>
    );
  }
}
