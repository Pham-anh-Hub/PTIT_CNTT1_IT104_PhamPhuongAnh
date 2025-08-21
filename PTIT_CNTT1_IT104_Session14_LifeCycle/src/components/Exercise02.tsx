import React, { Component } from "react";

type StateType = {
  isShow: boolean;
};

export default class Exercise02 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      isShow: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.isShow ? (
          <>
            <h1>Notification</h1>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
  componentDidMount(): void {
    console.log("Component đã được mount");
  }
}
