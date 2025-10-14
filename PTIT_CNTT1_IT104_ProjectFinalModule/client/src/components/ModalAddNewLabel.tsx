import { Button, TextField } from "@mui/material";
import { Modal } from "antd";
import ReturnIcon from "/images/returnVector.png";
import CloseIcon from "/images/ClosedModal.png";
import LabelBgChoice from "/images/uncheckIcon.png";
import React, { useEffect, useState } from "react";
import {
  templateLabelTask,
  type Board,
  type Label,
  type ListOfBoard,
  type Task,
  type User,
} from "../interfaces/board.interface";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { useParams } from "react-router-dom";
import {
  addNewTaskLabel,
  deleteTaskLabel,
  getAllUser,
  updateDetailLabel,
} from "../apis/user.data";
import { v4 as uuidv4 } from "uuid";

type Props = {
  isCreateLabel: boolean;
  editing?: Label;
  setIsCreateLabel: (value: boolean) => void;
  setCurrentTask: (updateTask: Task) => void;
  currentTask?: Task;
  currentList?: ListOfBoard;
};

export default function ModalAddNewLabel({
  isCreateLabel,
  setIsCreateLabel,
  editing,
  currentTask,
  setCurrentTask,
  currentList,
}: Props) {
  const dispatch = useAppDispatch();
  const { userId, boardId } = useParams();
  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);
  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];
  const [currentBoard, setCurrentBoard] = useState<Board | undefined>(
    undefined
  );
  const [labelBg, setLabelBg] = useState<
    { id: string; color: string } | undefined
  >(undefined);
  const [error, setError] = useState("");
  const [detailLabel, setDetailLabel] = useState<Label | undefined>(editing);
  const [inputContent, setInputContent] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);

  const createNewLabel = () => {
    const existed = currentTask?.tags.find(
      (item) => item.content === inputContent
    );
    if (!inputContent || !labelBg) {
      setError("Nội dung không được để trống");
      return;
    } else if (existed) {
      setError("Nội dung nhãn đã tồn tại");
      return;
    }

    const newLabel: Label = {
      id: uuidv4(),
      content: inputContent,
      color: labelBg.color,
      status: "unchoose",
    };
    console.log(newLabel);
    if (currentBoard && currentList && currentTask) {
      
      
      const updatedTasks = currentList.tasks.map((task) =>
        task.id === currentTask.id
          ? { ...currentTask, tags: [newLabel, ...currentTask.tags] }
          : task
      );
      const updatedLists = currentBoard?.lists.map((list) =>
        list.id === currentList.id ? { ...list, tasks: updatedTasks } : list
      );
      const updatedLabelBoards: Board[] = workBoards.map((board: Board) =>
        board.id === currentBoard?.id
          ? { ...board, lists: updatedLists }
          : board
      );
      if (userId) {
        console.log(userId);

        setCurrentTask({
          ...currentTask,
          tags: [newLabel, ...currentTask.tags],
        });

        dispatch(addNewTaskLabel({ userId, updatedBoards: updatedLabelBoards }));
        console.log(updatedLabelBoards);
        setIsCreateLabel(false);
        setLabelBg(undefined);
        setInputContent("");
      }
    }
  };

  const onDeleteLabel = () => {
    setIsConfirm(true);
  };

  const onConfirm = () => {
    if (currentBoard && currentList && currentTask) {
      const updateLabels = currentTask?.tags.filter(
        (tag: Label) => tag.id !== detailLabel?.id
      );
      const updatedTasks = currentList?.tasks.map((task: Task) =>
        task.id === currentTask?.id ? { ...task, tags: updateLabels } : task
      );
      const updatedTaskLists = currentBoard?.lists.map((list: ListOfBoard) =>
        list.id === currentList?.id ? { ...list, tasks: updatedTasks } : list
      );
      const updatedBoards: Board[] = workBoards.map((board: Board) =>
        board.id === currentBoard?.id
          ? { ...board, lists: updatedTaskLists }
          : board
      );
      if (userId) {
        dispatch(
          deleteTaskLabel({ userId, updatedLabelsInBoard: updatedBoards })
        );
        setCurrentTask({ ...currentTask, tags: updateLabels });
        setIsConfirm(false);
        setIsCreateLabel(false);
      }
    }
  };

  const handleCancel = () => {
    setIsConfirm(false);
  };

  const onSaveDelete = () => {
    if (
      !inputContent ||
      !labelBg ||
      !currentTask ||
      !currentList ||
      !currentBoard
    ) {
      setError("Nội dung không được để trống");
      return;
    }
    const updateLabels = currentTask?.tags.map((tag: Label) =>
      tag.id === detailLabel?.id
        ? { ...detailLabel, content: inputContent, color: labelBg.color }
        : tag
    );
    const updatedTasks = currentList?.tasks.map((task: Task) =>
      task.id === currentTask?.id ? { ...task, tags: updateLabels } : task
    );
    const updatesLists = currentBoard?.lists.map((list: ListOfBoard) =>
      list.id === currentList?.id ? { ...list, tasks: updatedTasks } : list
    );
    const updatedLabelBoards: Board[] = workBoards.map((board: Board) =>
      board.id === currentBoard?.id ? { ...board, lists: updatesLists } : board
    );
    if (userId) {
      dispatch(
        updateDetailLabel({ userId, updatedLabelsInfo: updatedLabelBoards })
      );
      setCurrentTask({
        ...currentTask,
        tags: updateLabels,
      });
      setIsCreateLabel(false);
    }
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  useEffect(() => {
    if (editing) {
    setDetailLabel(editing);
    setLabelBg(editing);
    setInputContent(editing?.content);
  } else {
    setDetailLabel(undefined);
    setLabelBg(undefined);
    setInputContent("");
  }
  }, [editing]);

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards]);
  return (
    <div>
      <Modal
        width={"28vw"}
        title={
          <div className="w-[60%] flex items-center justify-between">
            <img
              onClick={() => {
                setIsCreateLabel(false);
                // setInputContent("");
                // setLabelBg(undefined);
                // setDetailLabel(undefined);
              }}
              className="w-2 h-3.5 cursor-pointer"
              src={ReturnIcon}
              alt=""
            />
            <p className="text-[18px] text-center font-semibold text-[#44546F]">
              Create label
            </p>
          </div>
        }
        closeIcon={false}
        open={isCreateLabel}
        footer={
          detailLabel?.id ? (
            <div className="flex items-center justify-between mt-2">
              <Button onClick={onSaveDelete} variant="contained">
                Save
              </Button>
              <Button onClick={onDeleteLabel} variant="contained" color="error">
                Delete
              </Button>
            </div>
          ) : (
            <>
              <Button
                onClick={createNewLabel}
                className="flex justify-start"
                variant="contained"
              >
                Create
              </Button>
            </>
          )
        }
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-semibold text-[#44546F]">Title</p>
            <TextField
              value={inputContent}
              error={error !== ""}
              onChange={(e) => {
                setInputContent(e.target.value);
                setError("");
              }}
              className="w-[100%]"
            />
            <p className="text-[12px] text-red-600">{error}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-semibold text-[#44546F]">
              Select a color
            </p>
            <div className="grid grid-cols-5 gap-1.5">
              {templateLabelTask.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLabelBg(item)}
                  className="h-[56px] rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  {labelBg?.color === item.color ? (
                    <>
                      <img className="w-5 h-5" src={LabelBgChoice} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-1 border-[#091E4224] my-4"></div>
        </div>
      </Modal>
      {/* modal confirm xóa label */}

      <Modal
        title="Delete this label?"
        closable={true}
        closeIcon={
          <>
            <img
              onClick={handleCancel}
              className="w-4 h-4 opacity-50"
              src={CloseIcon}
              alt=""
            />
          </>
        }
        width={"24vw"}
        open={isConfirm}
        footer={
          <div className="flex gap-2.5 justify-between">
            <Button variant="contained" onClick={onConfirm}>
              Confirm
            </Button>
            <Button variant="contained" color="error" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        }
      >
        <div
          style={{
            backgroundColor: `${detailLabel?.color}`,
            width: "100%",
            padding: "10px",
            textAlign: "center",
            borderRadius: "3px",
            color: "white",
            fontWeight: "500",
          }}
        >
          {detailLabel?.content}
        </div>
      </Modal>
    </div>
  );
}
