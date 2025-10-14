import Sidebar from "../components/Sidebar";
import OriginNav from "../components/OriginNav";
import { Outlet } from "react-router-dom";

export default function WorksBoard() {
  return (
    <>
      <Sidebar childrent={<OriginNav />} />
      <main className="flex-[4.01]  bg-white ">
        <Outlet />
      </main>
    </>
  );
}
