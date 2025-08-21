import React, { Component } from "react";

import Exercise01 from "./components/Exercise01";
import Exercise02 from "./components/Exercise02";
import Exercise03 from "./components/Exercise03";
import Exercise04 from "./components/Exercise04";
import Exercise05 from "./components/Exercise05";
import Exercise06 from "./components/Exercise06";
import Exercise07 from "./components/Exercise07";
import Exercise08 from "./components/Exercise08";

export default class App extends Component {
  render() {
    return (
      <>
        {/* Bài 1 */}
        <Exercise01 />
        <hr />

        {/* Bài 2 */}
        <Exercise02 />
        <hr />

        {/* Bài 3 */}
        <Exercise03 />
        <hr />

        {/* Bài 4 */}
        <Exercise04 />
        <hr />

        {/* Bài 5 */}
        <Exercise05 />
        <hr />

        {/* Bài 6 */}
        <Exercise06 />
        <hr />

        {/* Bài 7 */}
        <Exercise07 />
        <hr />

        {/* Bài 8 */}
        <Exercise08 />
      </>
    );
  }
}
