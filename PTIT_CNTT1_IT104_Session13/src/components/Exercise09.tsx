import React, { Component } from "react";

type StateType = {
  companyName: string;
};

export default class Exercise09 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      companyName: "RikkeiSoft",
    };
  }

  render() {
    const changeName = () => {
      const nameCompany = document.querySelector(".companyName");
      if (nameCompany) {
        nameCompany.textContent =
          nameCompany.textContent === "Rikkei Academy"
            ? this.state.companyName
            : "Rikkei Academy";
      }
    };
    return (
      <div>
        <h3>
          Công ty: <span className="companyName">Rikkei Academy</span>
        </h3>
        <button onClick={changeName}>Change</button>
      </div>
    );
  }
}
