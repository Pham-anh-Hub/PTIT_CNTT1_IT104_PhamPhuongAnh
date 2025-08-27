import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import type { Task } from "../types/task_type";

export default function Model_Delete() {
  const taskContext = useContext(TaskContext);
  const [taskRemove, setTaskRemove] = useState<Task | undefined>(undefined);

  useEffect(() => {
    if (taskContext) {
      if (taskContext.targetDelete) {
        setTaskRemove(taskContext.targetDelete);
      }
    }
  });

  const confirmRemove = () => {
    if (taskContext) {
      if (taskContext.targetDelete) {
        taskContext.handleDeleteTask(taskContext.targetDelete.id);
        taskContext.setShowConfirm(false);
      }
    }
  };

  return (
    <div>
      {" "}
      {taskContext?.showConfirm ? (
        <>
          <div className="model-update">
            <div
              className="model-overlay"
              onClick={() => {
                taskContext.setShowConfirm(false);
              }}
            ></div>
            <div className="main-model">
              <h3>Xác nhận xóa nhiệm vụ {taskRemove?.name}</h3>

              <div className="action-btn">
                <button onClick={confirmRemove} type="button">
                  Xóa
                </button>
                <button
                  onClick={() => {
                    taskContext.setShowConfirm(false);
                  }}
                  type="button"
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
