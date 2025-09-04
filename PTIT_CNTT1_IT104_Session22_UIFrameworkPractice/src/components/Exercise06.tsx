import React from "react";
import { Spinner } from "react-bootstrap";

export default function Exercise06() {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
  );
}
