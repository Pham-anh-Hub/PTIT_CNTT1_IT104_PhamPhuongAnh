import React from "react";
import { tasks, type IDataTask } from "../data";
import { Link } from "react-router-dom";

export default function TaskList() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "3rem auto" }}>
        Danh sách công việc
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tasks.map((task: IDataTask) => (
          <div
            style={{
              width: "30%",
              padding: "12px",
              display: "flex",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>{task.title} </h3>
            <p>{task.description}</p>
            <Link to={`/taskdetail/${task.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
