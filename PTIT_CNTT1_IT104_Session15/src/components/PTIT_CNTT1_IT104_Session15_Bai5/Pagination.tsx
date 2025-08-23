import React, { Component } from "react";

type Student = {
  id: string;
  name: string;
  dOb: string;
  email: string;
  active: boolean;
};
type PropsType = {
  list: Student[];
};

export default class Pagination extends Component<PropsType> {
  render() {
    const list = this.props.list;
    return (
      <div className="pagination">
        <ul>
          <li style={{ fontSize: "15px" }}>{"<"}</li>
          {list.map((student: Student, index: number) => (
            <li className={student.active ? "active" : "inactive"}>{index}</li>
          ))}
          <li style={{ fontSize: "15px" }}>{">"}</li>
        </ul>
      </div>
    );
  }
}
