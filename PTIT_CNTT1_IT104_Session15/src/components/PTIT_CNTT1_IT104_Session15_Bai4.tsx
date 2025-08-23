import React, { Component } from "react";

type StateType = {
  range: string;
  inputValue: string;
};

export default class PTIT_CNTT1_IT104_Session15_Bai3 extends Component<
  object,
  StateType
> {
  constructor(props: object) {
    super(props);

    this.state = {
      range: "",
      inputValue: "",
    };
  }

  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        range: e.target.value,
      });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      console.log(this.state.range);

      this.setState({ inputValue: this.state.range });
    };

    return (
      <div>
        <div>
          Tiến độ hoàn thành: <span>{this.state.inputValue}%</span>
        </div>
        <input className="input-range" onChange={handleChange} type="range" />
        <div>
          <button onClick={() => handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
