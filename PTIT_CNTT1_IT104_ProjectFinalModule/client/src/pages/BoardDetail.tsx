import React from "react";
import Sidebar from "../components/Sidebar";
import ListBoards from "../components/ListBoards";

export default function BoardDetail() {
  return (
    <>
      <Sidebar childrent={<ListBoards />} />
      <main className="flex-[4.06]">main</main>
    </>
  );
}
