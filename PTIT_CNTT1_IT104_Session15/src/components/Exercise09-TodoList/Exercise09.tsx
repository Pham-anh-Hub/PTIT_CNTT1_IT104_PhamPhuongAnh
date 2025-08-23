import React, { Component } from "react";
// import { LayoutDashboard } from "lucide-react";
// import { Info } from "lucide-react";

import "../Exercise09/Exercise09.css";
import ConfirmModel from "../Exercise09/ConfirmModel";

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

type StateTypes = {
  task: Task;
  taskList: Task[];
  error: string;
  showModelDel: boolean;
  inputValue: string;
};

export default class Exercise09 extends Component<object, StateTypes> {
  targetTaskDel!: Task;
  targetEditTask!: Task;
  buttonStatus: string = "add";
  constructor(props: object) {
    super(props);

    this.state = {
      task: {
        id: "",
        name: "",
        completed: false,
      },
      taskList: JSON.parse(localStorage.getItem("taskList") || "[]"),
      error: "",
      showModelDel: false,
      inputValue: "",
    };
  }
  render() {
    const taskList: Task[] = [...this.state.taskList];

    // Hàm nhận thay đổi từ input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // e.preventDefault();
      this.setState({
        inputValue: e.target.value,
        task: {
          id:
            this.buttonStatus === "add"
              ? `T0${String(Math.round(Math.random() * 100000))}`
              : this.targetEditTask.id,
          name: e.target.value, // Ban đầu gán bằng this.inputValue --> gây thiếu ký tự hoặc gây rỗng
          completed: false,
        },
        error: "",
      });
    };

    // Hàm submit và thêm Task
    const { name } = this.state.task;
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const existed = taskList.find((task: Task) => task.name === name);
      if (!name) {
        this.setState({ error: "Dữ liệu không để trống" });
      } else {
        if (existed) {
          this.setState({
            error: "Công việc đã tồn tại",
          });
        } else {
          const newTask = this.state.task;
          const updatedList: Task[] = [...taskList];
          console.log(newTask);
          updatedList.push(newTask);
          this.setState({
            taskList: updatedList,
            showModelDel: false,
            inputValue: "",
          });
          console.log(updatedList);
          localStorage.setItem("taskList", JSON.stringify(updatedList));
        }
      }
    };

    // Hàm checked các task đã làm
    const handleChecked = (id: string) => {
      const checkedTask = taskList.find((task: Task) => task.id === id);
      if (checkedTask) {
        checkedTask.completed = !checkedTask.completed;
        this.setState({
          taskList: taskList,
        });
        localStorage.setItem("taskList", JSON.stringify(taskList));
        console.log(taskList);
      }
    };

    // Hàm xóa
    const handleDelete = (id: string) => {
      const targetTask = taskList.find((task: Task) => task.id === id);
      console.log(targetTask);
      if (targetTask) {
        this.setState({ showModelDel: true });
        this.targetTaskDel = targetTask;
      }
    };

    // hàm xác nhận xóa
    const confirmDelete = (id: string) => {
      const targetTask = taskList.findIndex((task: Task) => task.id === id);
      if (targetTask !== -1) {
        const updateList = taskList.filter((task: Task) => task.id !== id);
        this.setState({
          taskList: [...updateList],
          showModelDel: false,
        });
        localStorage.setItem("taskList", JSON.stringify(updateList));
      }
    };

    // Hàm sửa tên task
    const handleEdit = (id: string) => {
      this.buttonStatus = "edit";
      const editTask = taskList.find((task: Task) => task.id === id);
      if (editTask) {
        this.targetEditTask = editTask;
        console.log("targetEditTask; ", this.targetEditTask);
        this.setState({
          inputValue: this.targetEditTask.name,
        });
      }
    };

    const editedTask = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log(this.state.inputValue);
      const updatedList = taskList.map((task: Task) =>
        task.id === this.targetEditTask.id
          ? { ...task, name: this.state.inputValue }
          : { ...task }
      );
      this.setState({
        taskList: updatedList,
        inputValue: "",
      });
      console.log(updatedList);

      localStorage.setItem("taskList", JSON.stringify(updatedList));
      // Gán lại trạng thái button
      this.buttonStatus = "add";
    };

    return (
      <>
        <div className="form-task-list">
          <h2>Danh sách công việc</h2>
          <form className="form-task">
            <input
              onChange={handleChange}
              placeholder="Nhập tên công việc"
              type="text"
              value={this.state.inputValue}
            />
            {this.buttonStatus === "add" ? (
              <>
                <button onClick={handleSubmit}>Thêm</button>
              </>
            ) : (
              <>
                <button onClick={editedTask}>Sửa</button>
              </>
            )}
          </form>
          <div>{this.state.error}</div>

          <div className="task-list">
            {taskList.map((task: Task, index: number) => (
              <>
                <div key={index} className="task-detail">
                  <div className="task-infor">
                    <input
                      onChange={() => handleChecked(task.id)}
                      checked={task.completed}
                      type="checkbox"
                    />
                    {task.completed ? (
                      <s style={{ color: "gray" }}>{task.name}</s>
                    ) : (
                      <span>{task.name}</span>
                    )}
                  </div>
                  <div className="action">
                    <div onClick={() => handleEdit(task.id)}>✏️</div>
                    <div onClick={() => handleDelete(task.id)}>🗑️</div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="quantity-task">
            <span>
              Công việc đã hoàn thành:{" "}
              <b>
                {taskList.filter((task: Task) => task.completed).length}/
                {taskList.length}
              </b>
            </span>
          </div>
        </div>
        {this.state.showModelDel ? (
          <>
            <ConfirmModel
              task={this.targetTaskDel}
              taskList={this.state.taskList}
              confirmDel={() => confirmDelete(this.targetTaskDel.id)}
              closeFormDel={() => this.setState({ showModelDel: false })}
            />
          </>
        ) : (
          <></>
        )}
        {/* <div className="form-confirm-delete"></div> */}
      </>
    );
  }
}
