import { TextField, Button } from "@mui/material";
import { Modal, Select } from "antd";
import type {
  Board,
  ListOfBoard,
  Task,
  User,
} from "../interfaces/board.interface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { moveTaskToAnotherList } from "../apis/user.data";
// import React from "react";

type TaskProp = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  handleCancel: () => void;
  currentListTask?: ListOfBoard;
  currentTask?: Task;
  setCurrentList: (value: string) => void;
};

type ListValue = {
  value: string;
  label: string;
  id: string;
};

type IndexList = {
  label: string;
  value : number;
}

export default function ModalMoveTask({
  isModalOpen,
  setIsModalOpen,
  handleCancel,
  currentListTask,
  currentTask,
  setCurrentList,
}: TaskProp) {
  const dispatch = useAppDispatch();
  const { userId, boardId } = useParams();
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  const currentUser = users.find((user) => user.id === userId);
  const workBoards: Board[] = currentUser?.boards ?? [];
  const [currentBoard, setCurrentBoard] = useState<Board | undefined>(() => {
    const currBoard = workBoards.find((board) => board.id === boardId);
    return currBoard;
  });
  const [targetIndex] = useState<number>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [srcList, _setSrcList] = useState(currentListTask); // disable eslint cho lỗi không dùng đến
  const [distList, setDistList] = useState<ListOfBoard | undefined>(currentListTask);
  const [titleBoard, setTitleBoard] = useState(currentBoard?.title);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listValues, _setListValues] = useState<ListValue[]>(() => {
    const values: ListValue[] = [];
    if (currentBoard) {
      currentBoard.lists.forEach((list) => {
        values.push({ value: list.title, label: list.title, id: list.id });
      });
    }
    return values ? values : [];
  }); // Disable eslint cho lỗi không dùng đến

  const [indexValues] = useState<IndexList[]>(() => {
    const values: IndexList[] = [];
    if(distList){
      distList.tasks.forEach((_task: Task, index: number) => {
        values.push({label:`${index}`, value: index});
      });
      return values;
    }
    return []
  });

  const handleChange = (value: string, option?: ListValue | ListValue[]) => {
    if (!option || Array.isArray(option)) return;
    const targetList = currentBoard?.lists.find(
      (list: ListOfBoard) => list.id === option.id
    );
    if (targetList) {
      setDistList(targetList); // List đích
    }
  };
  const handleChooseIndex = (value: number) => {
    // if(value){
    //   setTargetIndex(value)
    // }
    console.log(value);
    
  };

  const onMoveCard = () => {
    console.log(srcList, " - ", distList, " - ", titleBoard, " - ", targetIndex);
    if (!titleBoard) {
      return;
    }
    if (userId && boardId && srcList && distList && currentTask) {
      dispatch(
        moveTaskToAnotherList({
          userId,
          boardId: boardId,
          updateTitleBoard: titleBoard,
          srcListId: srcList?.id,
          distListId: distList?.id,
          targetTask: currentTask,
        })
      );
      setCurrentList(distList.title);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards]);

  /* * * Render */
  return (
    <div>
      <Modal
        title={
          <p className="text-center font-semibold text-[18px] text-[#44546F]">
            Move Card
          </p>
        }
        closable={true}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={
          <>
            <Button
              onClick={onMoveCard}
              style={{
                display: "flex",
                justifySelf: "start",
                marginTop: "2rem",
              }}
              variant="contained"
            >
              Move
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-6">
          <p className="text- font-semibold text-[14px] text-[#44546F]">
            Select destination
          </p>
          <div>
            <h2 className="font-bold text-[18px] text-[#172B4D]">Board</h2>
            <TextField
              onChange={(e) => setTitleBoard(e.target.value)}
              value={titleBoard}
              className="w-full hover: border-1 border-[#8590A2]"
            />
          </div>
          <div>
            <div>
              <p className="font-bold text-[18px] text-[#172B4D]">List</p>
              <div className="flex gap-2">
                <Select
                  defaultValue={currentListTask?.title}
                  style={{ height: 56, width: "75%" }}
                  onChange={handleChange}
                  options={listValues}
                />
                <Select
                  defaultValue={null}
                  style={{ height: 56, width: "25%" }}
                  onChange={handleChooseIndex}
                  options={indexValues}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
