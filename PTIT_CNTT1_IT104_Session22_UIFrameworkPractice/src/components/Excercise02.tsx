import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function Excercise02() {
  return (
    <div>
      <InputGroup size="sm" className="mb-3 w-1/2">
        <Form.Control
          placeholder="Input cỡ nhỏ"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Input cỡ trung bình"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <Form.Control
          placeholder="Input cỡ lớn "
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
}
