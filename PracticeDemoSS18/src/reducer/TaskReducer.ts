import type { Task } from "../types/task_type";

export type Action =
  | { type: "ADD_TASK"; payload: Task }
  | {
    type: "DELETE_TASK"; payload: { id: number | string }
  }
  | { type: "UPDATE_TASK"; payload: { id: number | string; name: string; isDone: boolean } }
  | { type: "TOGGLE_TASK"; payload: { id: number | string } };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  // switch các hành động với task
  switch (action.type) {
    case "ADD_TASK":
      // Thêm mới nhiệm vụ 
      console.log([...state, action.payload]);
      return [...state, action.payload]
    case "DELETE_TASK":
      // Xóa nhiệm vụ
      return state.filter((task: Task) => task.id !== action.payload.id)
    case "TOGGLE_TASK":
      // Thay đổi trạng thái của nhiệm vụ
      return state.map((task: Task) => task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task)
    case "UPDATE_TASK":
      // Cập nhật nhiệm vụ
      return state.map((task: Task) => task.id === action.payload.id ? { ...task, name: action.payload.name } : task)
    default:
      // Không tác động , giữ nguyên và trả về
      return state

  }
};
