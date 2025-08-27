import { useContext } from "react";
import TaskItem from "./TaskItem";
// import { taskReducer } from "../reducer/TaskReducer";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../types/task_type";

export default function TaskList() {
  const context = useContext(TaskContext);
  if (!context) {
    return null;
  }
  console.log(context.tasks);
  const { tasks } = context;
  const taskList = tasks || [];

  return (
    <div>
      <ul className="list-group my-3">
        {/* Phần hiển thị các TaskItem */}
        {taskList.map((task: Task) => (
          <TaskItem
            task={task}
            handleDeleteTask={() => context.handleDeleteTask(task.id)}
            handleToggleTask={() => context.handleToggleTask(task.id)}
            // handleUpdateTask = {() => context.handleUpdateTask(task.)}
          />
        ))}
      </ul>
    </div>
  );
}
