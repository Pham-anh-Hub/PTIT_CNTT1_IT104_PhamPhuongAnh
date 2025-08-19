import React from "react";

const ListCourse = () => {
  const subjects: string[] = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <>
      <div>
        <ol>
          {subjects &&
            subjects.map((subject: string, index: number) => {
              return <li key={index}>{subject}</li>;
            })}
        </ol>
      </div>
    </>
  );
};

export default ListCourse;
