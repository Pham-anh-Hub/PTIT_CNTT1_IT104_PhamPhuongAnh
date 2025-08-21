import React, { Component } from "react";

type StateType = {
  slogan: string;
};

export default class Exercise04 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      slogan: "Học code để đi làm",
    };
  }
  render() {
    const handleChange = (e: React.ChangeEvent) => {
      e.stopPropagation();

      this.setState({
        slogan: "Học code sẽ thành công. Cố lên !!!",
      });
    };
    // Khi không ngăn chặn
    // const handleChange1 = () => {
    //   this.setState({
    //     slogan:
    //       this.state.slogan === "Học code để đi làm"
    //         ? "Học code sẽ thành công. Cố lên !!!"
    //         : "Học code để đi làm",
    //   });
    // };
    return (
      <>
        <h2>
          Slogan: <span>{this.state.slogan}</span>
        </h2>
        <button onClick={() => handleChange}>Change State</button>
        {/* <button onClick={handleChange1}>can Change</button> */}
      </>
    );
  }
}
