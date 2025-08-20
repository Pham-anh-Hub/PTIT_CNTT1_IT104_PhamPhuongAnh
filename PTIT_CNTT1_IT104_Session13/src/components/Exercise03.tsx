import React, { Component } from "react";

class User {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

type PropTypes = {
  id?: number;
};

type StateTypes = {
  id: number;
  name: string;
  age: number;
};

export default class Exercise03 extends Component<PropTypes, StateTypes> {
  render() {
    const users: User[] = [
      { id: 1, name: "Nguyen Van A", age: 20 },
      { id: 2, name: "Nguyen Van B", age: 20 },
      { id: 3, name: "Nguyen Van C", age: 20 },
    ];

    return (
      <table
        style={{ textAlign: "center", borderCollapse: "collapse" }}
        border={1}
      >
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
