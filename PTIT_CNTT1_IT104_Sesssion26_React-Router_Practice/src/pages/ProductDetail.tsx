import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>ProductDetail</h1>
      <h2>Product Id: {id}</h2>
    </div>
  );
}
