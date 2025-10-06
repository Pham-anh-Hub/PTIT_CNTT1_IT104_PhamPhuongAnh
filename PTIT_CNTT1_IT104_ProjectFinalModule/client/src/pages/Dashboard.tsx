import React from "react";


// Import Button của Material UI với tên khác (ví dụ: MUIButton)

// Import Button của Ant Design với tên khác (ví dụ: AntButton)
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";


export default function Dashboard() {
  return (
    <>
      <div style={{ fontFamily: "Roboto, sans-serif" }}>
        <div>
          <NavBar/>
          {/* boby */}
          <div style={{ height: "calc(100vh - 56px)" }} className="flex ">
            {/* side-bar */}
            <Outlet/>
          </div>
        </div>
      </div>

      
    </>
  );
}
