import React from "react";
import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return (
    <div>
      <h1>Team detail</h1>
      <h3>Team id: {teamId}</h3>
    </div>
  );
}
