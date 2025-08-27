import HeaderApp from "./HeaderApp";
import Model_Delete from "./Model_Delete";
import Model_Update from "./Model_Update";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TasksCompleted from "./TasksCompleted";

export default function MainTodoApp() {
  return (
    <>
      <div className="container todo-container">
        {/* Phần header app */}
        <HeaderApp />
        {/* Phần input lấy dữ liệu từ người dùng */}
        <TaskInput />

        {/* Phần task list danh sách công việc */}
        <TaskList />

        {/* Phần hiển thị các công việc đã hoàn thành */}
        <TasksCompleted />
        {/* model update nhiệm vụ  */}
        <Model_Update />
        {/* model xác nhận xóa */}
        <Model_Delete />
      </div>
    </>
  );
}
