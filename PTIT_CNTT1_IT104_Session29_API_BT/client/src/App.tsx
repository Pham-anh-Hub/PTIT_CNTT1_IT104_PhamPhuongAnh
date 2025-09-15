import "./App.css";
import Products from "./components/Products";
import Students from "./components/Students";

function App() {
  return (
    <div className="main-app">
      {/* Bài 1 + Bài 2 */}
      <Products />
      {/* Bài 3 + Bài 4 */}
      <Students/>
    </div>
  );
}

export default App;
