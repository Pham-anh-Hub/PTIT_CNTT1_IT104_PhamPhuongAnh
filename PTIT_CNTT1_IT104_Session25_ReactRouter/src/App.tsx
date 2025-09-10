import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import About from "./components/About";
import User from "./components/User";
import ListUser from "./components/ListUser";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <>
      <Header /> {/* Bài 6 */}
      <Routes>
        {/* bài 1-2*/}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* Bài 8 */}
        <Route path="/list-user" element={<ListUser />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
        {/* Bài 3-4 và tận dụng cho bài 9-10 */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Bài 10 */}
        <Route path="/user/:id" element={<User />} />
        {/* Bài 5 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
