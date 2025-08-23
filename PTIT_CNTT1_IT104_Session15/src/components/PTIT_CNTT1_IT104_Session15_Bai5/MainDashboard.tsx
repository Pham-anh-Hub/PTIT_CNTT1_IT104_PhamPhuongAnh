import React, { Component } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Board_Info from "./Board_Info";
import Pagination from "./Pagination";

type Student = {
  id: string;
  name: string;
  dOb: string;
  email: string;
  active: boolean;
};

type StateType = {
  list: Student[];
};

export default class MainDashboard extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: [
        {
          id: "SV001",
          name: "Nguyễn Văn A",
          dOb: "21/12/2023",
          email: "nva@gmail.com",
          active: true,
        },
        {
          id: "SV002",
          name: "Nguyễn Thị B",
          dOb: "21/11/2022",
          email: "ntb@gmail.com",
          active: false,
        },
      ],
    };
  }
  render() {
    return (
      <div className="main-board">
        <Header />
        <Filter />
        <Board_Info list={this.state.list} />
        <Pagination list={this.state.list} />
      </div>
    );
  }
}
