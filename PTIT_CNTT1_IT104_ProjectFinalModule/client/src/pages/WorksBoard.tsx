import React from "react";
import listWorks from "../assets/list_works.png";
import mockImage3 from "../assets/mockImage3.jpg";
import mockImage4 from "../assets/mockImg4.jpg";
import editBoard from "../assets/edit-board.png";
import starIcon from "../assets/star_icon.png";
import { Button as AntButton, Dropdown } from "antd";
import { DownOutlined, CalendarOutlined } from "@ant-design/icons";
import WorkSpaceBoard from "../components/WorkSpaceBoard";
import { Button as MUIButton } from "@mui/material";

import ButtonGroup from "@mui/material/ButtonGroup";
import Sidebar from "../components/Sidebar";
import OriginNav from "../components/OriginNav";

export default function WorksBoard() {
  const items = [
    { key: "1", label: "This week" },
    { key: "2", label: "This month" },
    { key: "3", label: "This year" },
  ];
  return (
    <>
      <Sidebar childrent={<OriginNav/>} />
      <main className="flex-[4.05]   bg-white ">
        <div className="py-[20px] mx-[20px] flex justify-between border-b-1 border-[#DEE2E6]">
          <div className="flex items-center gap-2.5">
            <img className="w-[26px] h-[19px]" src={listWorks} alt="" />
            <p className="text-[30px] font-medium">Your Workspaces</p>
          </div>

          <div className="flex items-center gap-2">
            <ButtonGroup disableElevation variant="outlined">
              <MUIButton style={{ borderColor: "#6C757D", color: "#6C757D" }}>
                Share
              </MUIButton>
              <MUIButton style={{ borderColor: "#6C757D", color: "#6C757D" }}>
                Export
              </MUIButton>
            </ButtonGroup>

            <Dropdown menu={{ items }} className="border-[#6C757D]">
              <AntButton
                icon={<CalendarOutlined />}
                className="flex items-center gap-2"
                style={{
                  borderColor: "#6C757D",
                  color: "#6C757D",
                  height: "35px",
                }}
              >
                This week <DownOutlined />
              </AntButton>
            </Dropdown>
          </div>
        </div>

        {/* Board List */}
        <WorkSpaceBoard />

        {/* Starred Boards */}
        <div className="flex items-center gap-2 py-[20px] mx-[20px] border-b-1 border-[#DEE2E6]">
          <img className="w-8 h-7" src={starIcon} alt="" />
          <p className="text-[30px] font-medium">Starred Boards</p>
        </div>
        <div className="py-4 px-6">
          <ul className="flex flex-wrap gap-4">
            <li
              className="card-board"
              style={{
                position: "relative",
                backgroundImage: `url(${mockImage3})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="overlay-card">
                <MUIButton
                  color="info"
                  variant="contained"
                  className="edit-board"
                >
                  <img className="w-3.5 h-3.5" src={editBoard} alt="" />
                  <p>Edit this board</p>
                </MUIButton>
              </div>
              <p
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "10%",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Board Title 1
              </p>
            </li>
            <li
              className="card-board"
              style={{
                position: "relative",
                backgroundImage: `url(${mockImage4})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="overlay-card">
                <MUIButton
                  color="info"
                  variant="contained"
                  className="edit-board"
                >
                  <img className="w-3.5 h-3.5" src={editBoard} alt="" />
                  <p>Edit this board</p>
                </MUIButton>
              </div>
              <p
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "10%",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Board Title 1
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
