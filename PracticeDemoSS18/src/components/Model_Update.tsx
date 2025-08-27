import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { TaskContext } from "../context/TaskContext";

export default function Model_Update() {
  const taskContext = useContext(TaskContext);
  const [inputValue, setInputValue] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  /**
   * Thay đổi gtri inputValue khi targetTaskEdit thay đổi --> đồng bộ
   * useEffect sẽ được chạy lại mỗi khi taskContext.targetEditTask (dependency) được thay đổi
   * Nếu giá trị đó không đổi, useEffect không chạy lại <=> setInputValue cũng không được
   */
  useEffect(() => {
    if (taskContext) {
      if (taskContext.targetEditTask) {
        setInputValue(taskContext.targetEditTask.name);
      }
    }
  }, [taskContext?.targetEditTask]); // (Depenency) quyết định useEffect chạy lại mỗi khi task cần sửa thay đổi

  const handleInUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmitNew = () => {
    if (taskContext && inputValue) {
      if (taskContext.targetEditTask) {
        const updateTask = {
          id: taskContext.targetEditTask?.id,
          name: inputValue,
          isDone: taskContext.targetEditTask?.isDone,
        };
        taskContext.handleUpdateTask(
          taskContext.targetEditTask?.id,
          updateTask
        );
      }
      taskContext.setStatusBtn("add");
    } else {
      console.log(showError);

      setShowError(true);
    }
  };

  return (
    <>
      {taskContext?.statusBtn === "edit" ? (
        <>
          <div className="model-update">
            <div
              className="model-overlay"
              onClick={() => {
                taskContext.setStatusBtn("add");
              }}
            ></div>
            <div className="main-model">
              <h3>Cập nhật nhiệm vụ</h3>
              <input value={inputValue} onChange={handleInUpdate} type="text" />
              {showError ? (
                <>
                  <div style={{ color: "red", fontSize: "12px" }}>
                    Thông tin không được để trống
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="action-btn">
                <button onClick={handleSubmitNew} type="button">
                  Cập nhật
                </button>
                <button
                  onClick={() => {
                    taskContext.setStatusBtn("add");
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
    </>
  );
}
