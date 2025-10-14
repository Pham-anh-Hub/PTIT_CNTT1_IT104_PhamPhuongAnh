import React, { useState } from "react";
import miniLogo from "/images/mini_Trello.png";
import searchBoard from "/images/search_board.png";
import menuSidebar from "/images/menu_sidebar.png";
import Sidebar from "./Sidebar";
import { Drawer } from "antd";
import OriginNav from "./OriginNav";
import { useParams } from "react-router-dom";
import ListBoards from "./ListBoards";

export default function NavBar() {
  const { boardId } = useParams();
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  const onClose = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <div>
      {/* header */}
      <div
        style={{
          backgroundColor:"#F8F9FA",
          zIndex: 10,
          position: "relative",
          overflowX:"hidden"
          
        }}
        className="flex w-full overflow-x-auto bg-[#F8F9FA] shadow-2xl"
      >
        <div className="flex flex-[1.001] justify-between">
          <img
            className="w-[125px] px-[16px] py-[18px]"
            src={miniLogo}
            alt=""
          />
          <div className="border-r-1 border-gray-300"></div>
        </div>
        <div className=" flex flex-[4] items-center justify-end gap-2.5">
          <img className="searchIcon" src={searchBoard} alt="" />
          <img
            onClick={handleOpenSideBar}
            className="menu-sidebar"
            src={menuSidebar}
            alt=""
          />
        </div>
        {/* Open Toggle sidebar */}
        <Drawer 
          title={
            <img
              className="w-[125px] px-[16px] py-[18px]"
              src={miniLogo}
              alt=""
            />
          }
          closeIcon={false}
          onClose={onClose}
          open={openSideBar}
        >
          <Sidebar
            childrent={boardId ? <ListBoards /> : <OriginNav />}
            open={openSideBar}
          />
        </Drawer>
      </div>
    </div>
  );
}
