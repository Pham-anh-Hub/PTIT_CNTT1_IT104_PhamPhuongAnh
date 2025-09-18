import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Profile() {
  const userInfo = useSelector((state: RootState) => state.profile);

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Id: {userInfo.id}</p>
      <p>Họ và tên: {userInfo.fullname}</p>
      <p>Giới tính: {userInfo.gender}</p>
      <p>Ngày sinh: {userInfo.dOb}</p>
      <p>Địa chỉ: {userInfo.address}</p>
    </div>
  );
}
