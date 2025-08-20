import "./App.css";
import Exercise01 from "./components/Exercise01";
import Exercise02 from "./components/Exercise02";
import Exercise03 from "./components/Exercise03";
import ParentComp from "./components/Exercise04/ParentComp";
import ParentComponent from "./components/Excerise05/ParentComponent";
import ListPost from "./components/Excercise06/ListPost";

import Exercise07 from "./components/Exercise07";
import Exercise09 from "./components/Exercise09";

function App() {
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

      {/* Bài 4*/}
      <ParentComp />
      <hr />

      {/* Bài 5 */}
      <ParentComponent />
      <hr />

      {/* Bài 6 */}
      <ListPost />
      <hr />

      {/* Bài 7 */}
      <Exercise07 />

      <hr />
      {/* Bài 9 */}
      <Exercise09 />
    </>
  );
}

export default App;
