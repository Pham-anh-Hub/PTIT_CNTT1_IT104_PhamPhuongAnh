import React from "react";

export default function Exercise05() {
  return (
    <div>
      <div className="w-80 h-64 bg-blue-100 p-5 rounded-md">
        <div className="relative size-[100%] bg-blue-200 rounded-md p-6 text-[#fff]">
          <p className="text-2xl">Relative parent</p>
          <div className="absolute bottom-0 left-0 bg-blue-300 w-[fit-content] p-3 rounded-md p">
            Absolute child
          </div>{" "}
          {/*child*/}
        </div>{" "}
        {/*parent*/}
      </div>{" "}
      {/*over*/}
    </div>
  );
}
