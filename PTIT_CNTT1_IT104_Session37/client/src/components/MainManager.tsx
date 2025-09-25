import React from "react";
import HeaderForm from "./HeaderForm";
import FilterForm from "./FilterForm";
import StudentList from "./StudentList";

export default function MainManager() {
  return (
    <div className="flex flex-col gap-3 justify-center w-[80%] mx-[auto] pt-4 bg-[#F9FAFB]">
      <HeaderForm />
      <FilterForm />
      <StudentList/>
    </div>
  );
}
