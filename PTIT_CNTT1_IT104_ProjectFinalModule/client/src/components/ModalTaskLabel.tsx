import { Button } from "@mui/material";
import { Modal } from "antd";
import EditLabel from "/images/EditLabel.png";
import CloseIcon from "/images/ClosedModal.png";
import type {
  Board,
  Label,
  ListOfBoard,
  Task,
  User,
} from "../interfaces/board.interface";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUser, toggleLabelTask } from "../apis/user.data";
import ModalAddNewLabel from "./ModalAddNewLabel";

interface LabelProps {
  isOpenDetailLabel: boolean;
  setIsOpenDetailLabel: (value: boolean) => void;
  currentTask?: Task;
  currentList?: ListOfBoard;
}

export default function ModalTaskLabel({
  isOpenDetailLabel,
  setIsOpenDetailLabel,
  currentTask,
  currentList,
}: LabelProps) {
  const dispatch = useAppDispatch();
  const { userId, boardId } = useParams();
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  const currentUser = users.find((user) => user.id === userId);
  const workBoards: Board[] = currentUser?.boards ?? [];
  const [currentBoard, setCurrentBoard] = useState<Board | undefined>(() => {
    const currBoard = workBoards.find((board) => board.id === boardId);
    return currBoard;
  });
  const [currTask, setCurrTask] = useState(currentTask);
  const [createNewLabel, setCreateNewLabel] = useState(false)
  const [detailLabel, setDetailLabel] = useState<Label | undefined>(undefined)

  const changeLabeStatus = (id: string) => {
    setCurrTask((prev) => {
      if (!prev || !prev.tags) return prev;
      const updatedTags = prev.tags.map((tag) =>
        tag.id === id
          ? {
              ...tag,
              status:
                tag.status === "choose"
                  ? ("unchoose" as "choose" | "unchoose")
                  : ("choose" as "choose" | "unchoose"),
            }
          : tag
      );
      return { ...prev, tags: updatedTags };
    });
  };
  const onCloseLabelModal = () => {
    if (!userId || !currTask || !currentList || !currentBoard) return;
    // Cập nhật task trong list
    const updatedTasks = currentList.tasks.map((task) =>
      task.id === currTask.id ? { ...currTask } : task
    );
    // Cập nhật list trong board
    const updatedLists = currentBoard.lists.map((list) =>
      list.id === currentList.id ? { ...list, tasks: updatedTasks } : list
    );
    // Cập nhật board trong danh sách boards
    const updatedBoards = workBoards.map((board) =>
      board.id === currentBoard.id ? { ...board, lists: updatedLists } : board
    );
    // Gửi action cập nhật
    dispatch(toggleLabelTask({ userId, updatedBoards }));
  };
  const addNewLabel = () => {
    setCreateNewLabel(true)
  };

  const onDetailLabel = (labelEditing : Label) => {
    console.log(labelEditing);
    setDetailLabel(labelEditing)
    setCreateNewLabel(true)
  }


  useEffect(() => {
    dispatch(getAllUser());
    console.log(currentTask);
  }, [dispatch]);

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards, currentBoard]);
  return (
    <div>
      <Modal
        title={
          <p className="text-[18px] font-semibold text-[#44546F] text-center">
            Labels
          </p>
        }
        closeIcon={
          <div onClick={onCloseLabelModal}>
            <img className="w-3 h-3" src={CloseIcon} alt="" />
          </div>
        }
        footer={
          <>
            <Button
              onClick={addNewLabel}
              style={{
                width: "100%",
                color: "#172B4D",
                backgroundColor: "#091E420F",
              }}
            >
              Create a new label
            </Button>
          </>
        }
        open={isOpenDetailLabel}
        onCancel={() => {
          setIsOpenDetailLabel(false);
        }}
      >
        <div className="w-[100%] flex flex-col gap-3">
          <p className="font-semibold text-[#44546F] text-[14px]">Labels</p>
          <div className="flex flex-col gap-1">
            {currTask?.tags.map((label: Label) => (
              <div key={label.id} className="w-[100%] flex gap-4 items-center">
                <input
                  onChange={() => changeLabeStatus(label.id)}
                  checked={label.status === "choose" ? true : false}
                  className="w-4.5 h-4.5"
                  type="checkbox"
                />
                <div
                  className="text-[15px] w-[90%] text-[#172B4D] p-3 rounded-md"
                  style={{
                    backgroundColor: `${label.color}`,
                    fontWeight: "500",
                  }}
                >
                  {label.content}
                </div>
                <img onClick={() => onDetailLabel(label)} className="w-4 h-4" src={EditLabel} alt="" />
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <ModalAddNewLabel isCreateLabel={createNewLabel} editing={detailLabel} setIsCreateLabel={setCreateNewLabel} currentTask={currTask} currentList={currentList} setCurrentTask={setCurrTask}/>
    </div>
  );
}
