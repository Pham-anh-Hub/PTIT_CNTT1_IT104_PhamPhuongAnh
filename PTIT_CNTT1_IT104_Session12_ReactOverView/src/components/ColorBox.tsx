import React from "react";

const ColorBox = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", fontFamily: "TimeNewRoman" }}>
        <div
          style={{
            backgroundColor: "red",
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          BOX
        </div>
        <div
          style={{
            backgroundColor: "blue",
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          BOX
        </div>
        <div
          style={{
            backgroundColor: "green",
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          BOX
        </div>
      </div>
    </>
  );
};

export default ColorBox;
