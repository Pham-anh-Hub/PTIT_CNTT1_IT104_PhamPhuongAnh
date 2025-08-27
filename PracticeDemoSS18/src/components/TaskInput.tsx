import React, { useContext, useState } from "react";
import type { Task } from "../types/task_type";
// import { taskReducer } from "../reducer/TaskReducer";
import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../context/TaskContext";

// KHÔNG SỬ DỤNG CÁC LOGIC LƯU TRỮ DỮ LIỆU (Bắn các action đi các nơi khác )

export default function TaskInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  const taskContext = useContext(TaskContext);

  // Gọi reduce --> truyền các action
  //   const [_state, dispatch] = useReducer(taskReducer, []);

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setShowError(false);
    } else {
      setShowError(true);
    }
    setInputValue(value);
  };

  const handleSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      console.log(inputValue);
      const newTask: Task = {
        id: uuidv4(),
        name: inputValue,
        isDone: false,
      };
      //   dispatch({ type: "ADD_TASK", payload: newTask });
      taskContext?.handleAddTask(newTask);
      console.log(newTask);
      setShowError(false);
    } else {
      setShowError(true);
    }
    setInputValue("");
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmitTask} className="d-flex mb-1">
        <input
          value={inputValue}
          onChange={getInputValue}
          type="text"
          className="form-control me-2"
          placeholder="Nhập công việc..."
        />
        <button className="btn btn-primary">Thêm</button>
      </form>
      {showError ? (
        <>
          <p className="text-danger error-text mb-3 text-sm fs-6">
            Vui lòng nhập tên công việc!
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
