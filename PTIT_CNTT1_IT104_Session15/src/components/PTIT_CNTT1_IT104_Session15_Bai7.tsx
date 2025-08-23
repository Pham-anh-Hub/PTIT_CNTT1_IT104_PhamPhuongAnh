import React, { Component } from "react";

type StateType = {
  hour: number;
  minute: number;
  second: number;
};

export default class PTIT_CNTT1_IT104_Session15_Bai7 extends Component<
  object,
  StateType
> {
  timerId: number | undefined = undefined;
  constructor(props: object) {
    super(props);

    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    });
  }
  componentWillUnmount(): void {
    // clearInterval(this.timerId);
  }
  render() {
    const formatTime = (
      hour: number,
      minute: number,
      seconds: number
    ): string => {
      const hours = hour;
      const minutes = minute;
      const secs = seconds;

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };
    return (
      <div>
        <h3>Thời gian hiện tại: </h3>
        <div>
          {formatTime(this.state.hour, this.state.minute, this.state.second)}
        </div>
      </div>
    );
  }
}
