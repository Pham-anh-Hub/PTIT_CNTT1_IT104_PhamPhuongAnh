import React, { Component } from "react";

type StateType = {
  count: number;
};

export default class Counter extends Component<object, StateType> {
  timerId: number | undefined = undefined;
  constructor(props: object) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({
        count: this.state.count < 10 ? this.state.count + 1 : 0,
      });
    }, 1000);
  }
  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <div>
          Count: <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
}
