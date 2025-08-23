import React, { Component } from "react";
import "../App.css";

type StateType = {
  email: string;
};

export default class PTIT_CNTT1_IT104_Session15_Bai1 extends Component<
  object,
  StateType
> {
  constructor(props: object) {
    super(props);

    this.state = {
      email: "",
    };
  }
  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        email: e.target.value,
      });
    };
    const handleSubmit = () => {
      console.log(this.state);
      this.setState({ email: "" });
    };

    return (
      <>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input onChange={handleChange} type="text" id="" />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </>
    );
  }
}
