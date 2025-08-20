import React, { Component } from "react";

import ChildrentComponent from "./ChildrentComponent";

export default class ParentComponent extends Component {
  render() {
    const product = { id: 1, name: "Bánh mỳ", price: 35000, quantity: 10 };
    return (
      <div>
        <ChildrentComponent {...product} />
      </div>
    );
  }
}
