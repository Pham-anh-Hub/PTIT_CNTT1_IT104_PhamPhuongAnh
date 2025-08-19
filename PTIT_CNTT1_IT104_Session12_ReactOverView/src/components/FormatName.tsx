import React from "react";

class UserName {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const FormatName = (user: UserName) => {
  const result: string = user.firstName + " " + user.lastName;
  return (
    <div
      style={{
        fontSize: "20px",
        fontFamily: "TimeNewRomans",
        fontWeight: "bold",
      }}
    >
      Họ và tên: {result}
    </div>
  );
};

export default FormatName;
