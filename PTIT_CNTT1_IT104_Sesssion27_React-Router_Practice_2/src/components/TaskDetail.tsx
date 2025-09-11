import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tasks, type IDataTask } from "../data";

export default function TaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [targetTask, setTargetTask] = useState<IDataTask | undefined>(
    undefined
  );
  useEffect(() => {
    if (id) {
      const foundTask = tasks.find((item: IDataTask) => item.id === Number(id));
      if (foundTask) {
        setTargetTask(foundTask);
      }
    }
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: "#eee",
      }}
    >
      <h1>Chi tiết công việc</h1>
      <h2>{targetTask?.title}</h2>
      <p>{targetTask?.description}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Quay lại
      </button>
    </div>
  );
}
