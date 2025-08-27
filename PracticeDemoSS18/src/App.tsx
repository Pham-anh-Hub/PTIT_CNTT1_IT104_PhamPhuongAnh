import "./App.css";
// import MainTodoApp from "./components/MainTodoApp";
import TaskContextProvider from "./context/TaskContext";

function App() {
  return (
    <>
      {/* <MainTodoApp /> */}
      <TaskContextProvider />
    </>
  );
}

export default App;
