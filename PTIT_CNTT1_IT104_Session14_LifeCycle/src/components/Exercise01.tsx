import React, { Component } from "react";

type StateType = {
  username: string;
};

export default class Exercise01 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      username: "Phạm Phương Anh",
    };
  }
  render() {
    return (
      <>
        <h2>Họ và tên: {this.state.username}</h2>
      </>
    );
  }
  componentDidMount(): void {
    console.log("Username đã được render ra giao diện");
  }
}
