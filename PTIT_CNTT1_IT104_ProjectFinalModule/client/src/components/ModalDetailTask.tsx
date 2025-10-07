import { Modal } from "antd";
import React from "react";
import "../App.css";
import DoneTask from "/images/doneTickIcon.png";
import TickTask from "/images/tickIcon.png";
import LabelIcon from "/images/Label.png";
import Clock from "/images/Timer.png";
import Diver from "/images/diver.png";
import ArrowDown from "/images/arrowDown.png";
import Description from "/images/description.png";
import EditorTask from "./BaseEditor";
import { Button } from "@mui/material";
import type { ListOfBoard, Task } from "../interfaces/board.interface";

type ModalProp = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  lists: ListOfBoard[];
  targetDetailTask?: Task;
};

export default function ModalDetailTask({
  isModalOpen,
  setIsModalOpen,
  targetDetailTask,
}: ModalProp) {
  
  const handleOk = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div style={{ fontFamily: `"Roboto", sans-serif` }}>
      <Modal
        closeIcon={false}
        open={isModalOpen}
        width={800}
        style={{ top: 60 }}
        bodyStyle={{
          height: "65vh",
          overflowY: "auto",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
        }}
        footer={
          <div className="flex justify-items-start gap-2">
            <Button onClick={handleOk} color="primary" variant="contained">
              Save
            </Button>
            <Button onClick={handleCancel} color="inherit">
              Cancel
            </Button>
          </div>
        }
      >
        <div className="h-[fit-content] flex flex-col gap-2.5">
          {/* head modal */}
          <div className=" flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <img
                src={
                  targetDetailTask?.status === "pending" ? TickTask : DoneTask
                }
                className="w-4 h-4"
                alt=""
              />
              <p className="font-semibold text-xl text-[rgba(23, 43, 77, 1)]">
                {targetDetailTask?.title}
              </p>
            </div>
            <div className="flex gap-2 pl-7">
              <p>in list</p>
              <div className="flex items-center gap-3 border-1 border-[#DCDFE4] bg-[#DCDFE4] px-1.5 rounded-md">
                <p className="text-[#44546F] font-bold text-[12px]">
                  {"List...".toUpperCase()}
                </p>{" "}
                <img src={ArrowDown} className="w-4 h-2" alt="" />
              </div>
            </div>
          </div>
          {/* main modal */}
          <div className="flex justify-between h-[100%]">
            <div className="flex-[3] flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <img className="w-4.5 h-3.5" src={Description} alt="" />
                <p className="font-semibold text-[16px]">Description</p>
              </div>

              <EditorTask />
            </div>
            <div className="flex-[1]">
              <ul className="flex flex-col justify-self-end gap-2 w-[90%] mt-2">
                <li className="">
                  <Button
                    style={{ backgroundColor: "#091E420F", width: "100%" }}
                    color="inherit"
                  >
                    <img className="w-3.5 mr-2  h-3.5" src={LabelIcon} alt="" />{" "}
                    Label
                  </Button>
                </li>
                <li className="">
                  <Button
                    style={{ backgroundColor: "#091E420F", width: "100%" }}
                    color="inherit"
                  >
                    <img className="w-3.5 mr-2  h-3.5" src={Clock} alt="" />{" "}
                    Dates
                  </Button>
                </li>
                <li className="">
                  <Button
                    style={{
                      backgroundColor: "#C9372C",
                      color: "white",
                      width: "100%",
                    }}
                  >
                    <img className="w-3.5 mr-2" src={Diver} /> Delete
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
