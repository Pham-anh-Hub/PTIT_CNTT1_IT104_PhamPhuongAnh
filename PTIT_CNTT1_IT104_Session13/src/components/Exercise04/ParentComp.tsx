import React, { Component } from "react";
import ChildrenComp from "./ChildrenComp";

export default class ParentComp extends Component {
  render() {
    const username = "Phạm Phương Anh";
    return (
      <>
        <span style={{ fontSize: "20px", fontWeight: "500" }}>
          <span>Họ và tên bên component cha: {username}</span>
          <ChildrenComp username={username} />
        </span>
      </>
    );
  }
}
