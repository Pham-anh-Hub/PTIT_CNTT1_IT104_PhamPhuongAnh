import React, { Component } from "react";

type StateTypes = {
  gender: string;
};

export default class Exercise06 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      gender: "",
    };
  }
  render() {
    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
      //   e.preventDefault();  Không cần thiết vì sự kiện của radio chỉ là change không phải submit
      this.setState({
        gender: e.target.value,
      });
      console.log(e.target.value);
    };
    return (
      <div>
        <label htmlFor="">Giới tính: </label>
        <input
          onChange={handleChecked}
          checked={this.state.gender === "male"}
          type="radio"
          value="male"
        />
        {" Nam\t"}
        <input
          onChange={handleChecked}
          checked={this.state.gender === "female"}
          type="radio"
          value="female"
        />
        {" Nữ\t"}

        <input
          onChange={handleChecked}
          checked={this.state.gender === "other"}
          type="radio"
          value="other"
        />
        {" Khác\t"}
      </div>
    );
  }
}
