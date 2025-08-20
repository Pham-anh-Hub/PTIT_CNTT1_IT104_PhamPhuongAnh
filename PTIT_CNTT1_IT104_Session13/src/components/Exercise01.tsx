import React, { Component } from "react";

type PropTypes = {
  userName?: string;
};

type StateTypes = {
  username: string;
};

export default class Exercise01 extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      username: "Phạm Phương Anh",
    };
  }

  render() {
    return (
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        {" "}
        Họ và tên: {this.state.username}
      </div>
    );
  }
}
