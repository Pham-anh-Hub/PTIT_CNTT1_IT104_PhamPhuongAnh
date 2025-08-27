import React, { createContext, useReducer, useState } from "react";
import MainTodoApp from "../components/MainTodoApp";
import type { Task } from "../types/task_type";
import { taskReducer } from "../reducer/TaskReducer";

type TaskContextType = {
  tasks?: Task[];
  handleAddTask: (task: Task) => void;
  handleUpdateTask: (id: number | string, newTask: Task) => void;
  handleDeleteTask: (id: number | string) => void;
  handleToggleTask: (id: number | string) => void;
  statusBtn: string;
  setStatusBtn: (value: string) => void;
  targetEditTask: Task | undefined;
  setTargetEditTask: (task: Task) => void;
  showConfirm: boolean;
  setShowConfirm: (value: boolean) => void;
  targetDelete: Task | undefined;
  setTargetDelete: (task: Task) => void;
};

// B1: Tạo Context
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export default function TaskContextProvider() {
  // Nhận và lưu dữ liệu qua reducer
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [statusBtn, setStatusBtn] = useState<string>("add");
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [targetEditTask, setTargetEditTask] = useState<Task | undefined>(
    undefined
  );
  const [targetDelete, setTargetDelete] = useState<Task | undefined>(undefined);
  console.log(tasks);

  const handleAddTask = (task: Task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const handleDeleteTask = (id: number | string) => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  };

  const handleToggleTask = (id: number | string) => {
    dispatch({ type: "TOGGLE_TASK", payload: { id } });
  };

  const handleUpdateTask = (id: number | string, newTask: Task) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { id, name: newTask.name, isDone: newTask.isDone },
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleDeleteTask,
        handleToggleTask,
        handleUpdateTask,
        statusBtn,
        setStatusBtn, // Hàm lấy từ chính useState
        targetEditTask,
        setTargetEditTask,
        showConfirm,
        setShowConfirm,
        targetDelete,
        setTargetDelete,
      }}
    >
      <MainTodoApp />
    </TaskContext.Provider>
  );
}
