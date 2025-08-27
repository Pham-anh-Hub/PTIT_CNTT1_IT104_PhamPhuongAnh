import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../types/task_type";

export default function TasksCompleted() {
  const taskContext = useContext(TaskContext);
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    if (taskContext) {
      if (taskContext.tasks) {
        setTaskList(taskContext.tasks);
      }
    }
  });

  return (
    <div>
      {taskList.length === 0 ? (
        <>
          {/* Hiển thị khi chưa có công việc */}
          <div className="text-center text-warning fw-medium">
            Chưa có công việc nào
          </div>
        </>
      ) : (
        <>
          {taskList.filter((task) => task.isDone).length === 0 ? (
            <>
              {/* Hiển thị khi chưa có công việc hoàn thành */}
              <div className="text-center text-danger fw-medium">
                Chưa có công việc nào hoàn thành
              </div>
            </>
          ) : (
            <>
              {/* Hiển thị khi tất cả công việc hoàn thành */}
              <div className="text-center text-success fw-medium">
                {/* Tất cả công việc đã hoàn thành */}
                {taskList.filter((task) => task.isDone).length} /
                {taskList.length} công việc đã hoàn thành
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
