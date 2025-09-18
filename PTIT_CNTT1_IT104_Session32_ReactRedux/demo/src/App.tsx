import "./App.css";
import ListUser from "./components/ListUser";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import RandomNumber from "./components/RandomNumber";
import ChangeState from "./components/ChangeState";
import ThemeState from "./components/ThemeState";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

function App() {
  const loginedAccount = useSelector((state: RootState) => state.login);
  console.log("Tài khoản đã đăng nhập: ", loginedAccount);

  return (
    <div className="container">
      <hr />
      <Profile />
      <hr />
      <ListUser />
      <hr />
      <Counter />
      <hr />
      <RandomNumber />
      <hr />
      <ChangeState />
      <hr />
      <ThemeState />
    </div>
  );
}

export default App;
