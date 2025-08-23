import React, { Component } from "react";
import { X } from "lucide-react";

import "../Exercise09/Exercise09.css";
// import Info from "lucide-react";
type Task = {
  id: string;
  name: string;
  completed: boolean;
};

type PropTypes = {
  task: Task;
  taskList: Task[];
  confirmDel: (id: string) => void;
  closeFormDel: () => void;
};

export default class ConfirmModel extends Component<PropTypes> {
  taskList = this.props.taskList;
  render() {
    return (
      <div className="form-confirm-delete">
        <div className="overlay-form"></div>
        <div className="form-main">
          <header>
            <h2>Xác nhận</h2>
            <span className="exit-icon" onClick={this.props.closeFormDel}>
              <X />
            </span>
          </header>
          <div>
            <span className="detail-task">
              Bạn có xác nhận xóa công việc
              <p style={{ fontWeight: "bold" }}>
                {" "}
                {" " + this.props.task.name} ?
              </p>
            </span>
          </div>
          <div className="action">
            <button onClick={() => this.props.confirmDel(this.props.task.id)}>
              Xóa
            </button>
            <button onClick={this.props.closeFormDel}>Hủy</button>
          </div>
        </div>
      </div>
    );
  }
}
