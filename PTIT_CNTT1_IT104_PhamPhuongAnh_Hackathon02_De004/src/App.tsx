import "./App.css";
import Header from "./components/Header";
import ManagerBoard from "./components/ManagerBoard";

function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#fafafa" }}>
      <Header />
      <ManagerBoard />
    </div>
  );
}

export default App;
