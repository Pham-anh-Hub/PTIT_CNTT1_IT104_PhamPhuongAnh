import React, { Component } from "react";

type StateType = {
  theme: string;
  language: string;
};

export default class Exercise07 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      language: "vietnemese",
      theme: "light",
    };
  }
  render() {
    return (
      <>
        {this.state.theme === "light" && this.state.language === "english" ? (
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #dadada",
            }}
          >
            <h1>Nền: {"Sáng"}</h1>
            <h1>Ngôn ngữ: {"Tiếng Anh"}</h1>
          </div>
        ) : (
          <div
            style={{
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              border: "1px solid #dadada",
            }}
          >
            <h1>Nền: {"Tối"}</h1>
            <h1>Ngôn ngữ: {"Tiếng Việt"}</h1>
          </div>
        )}
      </>
    );
  }
}
