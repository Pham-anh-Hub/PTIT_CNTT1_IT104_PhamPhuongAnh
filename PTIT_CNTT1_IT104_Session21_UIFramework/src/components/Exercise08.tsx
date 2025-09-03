import React from "react";

export default function Exercise08() {
  return (
    <div className="flex flex-col gap-3  w-4xl">
      {/* Các phần tử nằm bên trái */}
      <div className="flex border-2 rounded-md border-gray-100 justify-start gap-2.5">
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          01
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          02
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          03
        </div>
      </div>
      {/* Các phần tử nằm bên phải*/}
      <div className="flex border-2 rounded-md border-gray-100 justify-end gap-2.5">
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          01
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          02
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          03
        </div>
      </div>
      {/* Các phần tử nằm ở giữa  */}
      <div className="flex border-2 rounded-md border-gray-100 justify-center gap-2.5">
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          01
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          02
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          03
        </div>
      </div>
      {/*  Các phần tử giãn ra hai bên*/}
      <div className="flex border-2 rounded-md border-gray-100 justify-between gap-2.5">
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          01
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          02
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          03
        </div>
      </div>
      {/* Các phần tử giãn đều 2 bên */}
      <div className="flex border-2 rounded-md border-gray-100 justify-around gap-2.5">
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          01
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          02
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          03
        </div>
      </div>
      {/* Các phần tử giữa đều */}
      <div className="flex border-2 rounded-md border-gray-100 justify-evenly gap-2.5">
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          01
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          02
        </div>
        <div className="w-[50px] bg-blue-300 text-center text-[#fff] rounded-md h-[50px]">
          03
        </div>
      </div>
    </div>
  );
}
