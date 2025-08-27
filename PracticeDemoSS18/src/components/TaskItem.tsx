// import { useReducer } from "react";
// import { taskReducer } from "../reducer/TaskReducer";
import { useContext } from "react";
import type { Task } from "../types/task_type";
import { TaskContext } from "../context/TaskContext";
// import { TaskContext } from "../context/TaskContext";

type PropyType = {
  task: Task;
  handleToggleTask: (id: string | number) => void;
  handleDeleteTask: (id: string | number) => void;
};

export default function TaskItem({
  task,
  handleToggleTask,
}: // handleDeleteTask,
PropyType) {
  // Nhận hành động thực thi từ Prop (TaskList)

  // const [statusBtn, setStatusBtn] = useState<string>("add");

  const taskContext = useContext(TaskContext);
  const onUpdateTask = (task: Task) => {
    if (taskContext) {
      taskContext.setStatusBtn("edit");
      console.log(task);

      taskContext.setTargetEditTask(task);
    }
  };
  const onDeleteTask = (task: Task) => {
    console.log("xóa: ", task.name);

    if (taskContext) {
      taskContext.setTargetDelete(task);
      taskContext.setShowConfirm(true);
    }
  };

  return (
    <>
      <div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              onChange={() => handleToggleTask(task.id)}
              className="form-check-input me-2"
              type="checkbox"
            />
            <span className="task-name">{task.name}</span>
          </div>
          <div>
            <i
              onClick={() => onUpdateTask(task)}
              className="fas fa-edit text-primary me-3"
              role="button"
            />
            <i
              onClick={() => onDeleteTask(task)}
              className="fas fa-trash text-danger"
              role="button"
            />
          </div>
        </li>
      </div>
    </>
  );
}
