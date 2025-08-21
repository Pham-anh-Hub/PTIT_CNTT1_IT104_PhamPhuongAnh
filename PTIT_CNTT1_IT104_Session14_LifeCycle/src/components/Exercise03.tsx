import React, { Component } from "react";

type StateTypes = {
  companyName: string;
};

export default class Exercise03 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      companyName: "RikkeiSoft",
    };
  }
  render() {
    const changeState = () => {
      this.setState({
        companyName:
          this.state.companyName === " RikkeiSoft"
            ? "Rikkei Academy"
            : " RikkeiSoft",
      });
    };
    return (
      <>
        <h2>
          Company:
          <span>{this.state.companyName}</span>
        </h2>
        <button onClick={changeState}>Change State</button>
      </>
    );
  }
}
