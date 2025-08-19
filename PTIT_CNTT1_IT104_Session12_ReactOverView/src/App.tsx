//
import "./App.css";

import ListCourse from "./components/ListCourse";
import Calculation from "./components/Calculation";
import UserInfor from "./components/UserInfor";
import ColorBox from "./components/ColorBox";
import FormatName from "./components/FormatName";
import AdminIndex from "./components/AdminIndex";
import UserLayout from "./components/UserLayout";
import ListAccount from "./components/ListAccount";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      {/* Bài 1 */}
      <h2>Danh sách môn học</h2>
      <ListCourse></ListCourse>
      {/* Bài 2 */}
      <h2>Danh sách kết quả</h2>
      <Calculation></Calculation>
      {/* Bài 3 */}
      <UserInfor></UserInfor>
      {/* Bài 4 */}
      <h2>Color Box</h2>
      <ColorBox></ColorBox>

      {/* Bài 5 */}
      <h2>Format Name</h2>
      <FormatName firstName={"Phạm Minh"} lastName={"Quân"}></FormatName>

      {/* Bài 6 */}
      <h2>Xây dựng khung trang quản trị</h2>
      <AdminIndex></AdminIndex>

      {/* Bài 7 */}
      <h2>Xây dựng khung giao diện người dùng</h2>
      <UserLayout></UserLayout>

      {/* Bài 8 */}
      <h2>Giao diện danh sách tài khoản</h2>
      <ListAccount></ListAccount>

      {/*Bài 9 */}
      <TaskList></TaskList>
    </>
  );
}

export default App;
