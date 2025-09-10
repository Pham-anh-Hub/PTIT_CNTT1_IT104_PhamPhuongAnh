import React from "react";
import { useParams } from "react-router-dom";

export default function StudentDetail() {
  const { name } = useParams();
  return (
    <div>
      <h1>StudentDetail</h1>
      <h2>Student Name: {name}</h2>
    </div>
  );
}
