import React, { Component } from "react";

type StateType = {
  color: string;
  inputValue: string;
};

export default class PTIT_CNTT1_IT104_Session15_Bai2 extends Component<
  object,
  StateType
> {
  constructor(props: object) {
    super(props);

    this.state = {
      color: "",
      inputValue: "",
    };
  }

  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        color: e.target.value,
      });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      this.setState({ inputValue: this.state.color });
    };

    return (
      <div>
        <h2>
          Color: <span>{this.state.inputValue}</span>
        </h2>
        <div>Form:</div>
        <input onChange={handleChange} type="color" />
        <button onClick={() => handleSubmit} type="submit">
          Submit
        </button>
      </div>
    );
  }
}
