import TextArea from "antd/es/input/TextArea";
import { v4 as uuidv4 } from "uuid";
import iconX from "/images/X_icon.png";
import { useEffect, useState } from "react";
import { message } from "antd";
import type { Board, ListOfBoard, Task, User } from "../interfaces/board.interface";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { addNewTaskToList, getAllUser } from "../apis/user.data";
import { useParams } from "react-router-dom";

type ModalProp = {
  setAddNewTask: (value: string) => void;
  currentList : ListOfBoard
};

export default function ModalAddTask({ setAddNewTask, currentList }: ModalProp) {
  const dispatch = useAppDispatch();
  const { userId, boardId } = useParams();
  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);
  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_currentBoard, setCurrentBoard] = useState<Board | undefined>(
    undefined
  );
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards]);
  const [valueTask, setValueTask] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onAddNewTask = () => {
    if (!valueTask) {
      messageApi.open({
        type: "error",
        content: "Tên nhiệm vụ không để trống",
      });
      setError(true);
      return;
    }
    const newTask: Task = {
      id: uuidv4(),
      title: valueTask,
      description: "",
      status: "pending",
      due_date: "",
      create_at: String(new Date()),
      tags: [],
    };
    if(userId && boardId){
        dispatch(addNewTaskToList({userId:userId, boardId: boardId, listId : currentList.id, newTask}));
        setAddNewTask("")
    }
  };
  return (
    <>
      {/* Khối add */}
      <div className="flex flex-col gap-2">
        <TextArea
          status={error ? "error" : ""}
          value={valueTask}
          onChange={(e) => {
            setValueTask(e.target.value);
            setError(false);
          }}
          autoSize={{ minRows: 2, maxRows: 4 }}
        />
        <div className="flex items-center gap-4">
          <button
            onClick={onAddNewTask}
            className="border-1 p-1.5 border-[#0C66E4] bg-[#0C66E4] rounded-xs "
          >
            <p className="text-[14px] text-amber-50">Add card</p>
          </button>
          <img
            onClick={() => {
              setAddNewTask("");
              setError(false);
              setValueTask("");
            }}
            className="w-3 h-3 cursor-pointer"
            src={iconX}
            alt=""
          />
        </div>
      </div>
      {contextHolder}
    </>
  );
}
