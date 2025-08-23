import React, { Component } from "react";

import PTIT_CNTT1_IT104_Session15_Bai1 from "./components/PTIT_CNTT1_IT104_Session15_Bai1";
import PTIT_CNTT1_IT104_Session15_Bai2 from "./components/PTIT_CNTT1_IT104_Session15_Bai2";
import PTIT_CNTT1_IT104_Session15_Bai3 from "./components/PTIT_CNTT1_IT104_Session15_Bai3";
import PTIT_CNTT1_IT104_Session15_Bai4 from "./components/PTIT_CNTT1_IT104_Session15_Bai4";
import ListPost from "./components/ListPost";
import PTIT_CNTT1_IT104_Session15_Bai7 from "./components/PTIT_CNTT1_IT104_Session15_Bai7";
import Counter from "./components/Counter";
import MainDashboard from "./components/PTIT_CNTT1_IT104_Session15_Bai5/MainDashboard";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <PTIT_CNTT1_IT104_Session15_Bai1 />
        <hr />

        <PTIT_CNTT1_IT104_Session15_Bai2 />
        <hr />

        <PTIT_CNTT1_IT104_Session15_Bai3 />
        <hr />

        <PTIT_CNTT1_IT104_Session15_Bai4 />
        <hr />

        <ListPost />
        <hr />

        <PTIT_CNTT1_IT104_Session15_Bai7 />
        <hr />

        <Counter />
        <hr />

        <MainDashboard />
      </div>
    );
  }
}
