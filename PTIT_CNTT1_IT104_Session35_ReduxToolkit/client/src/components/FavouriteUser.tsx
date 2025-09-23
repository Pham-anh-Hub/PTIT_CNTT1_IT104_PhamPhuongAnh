import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { Spin } from "antd";
import { HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import { getAllList } from "../apis/getUserList";
import { toggleFavourUser } from "../redux/slices/likedUse.slices";

export default function FavouriteUsers() {
  const { data, error, status } = useAppSelector((state) => state.favouritUser);
  const dispatch = useAppDispatch();

  const handleToggleStatus = (id: string) => {
    dispatch(toggleFavourUser({ userId: id }));
  };

  useEffect(() => {
    dispatch(getAllList());
  }, [dispatch]);

  if (error) {
    <h1>Đã có lỗi xảy ra vui lòng kiểm tra lại</h1>;
  }

  return (
    <>
      {status === "pending" && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      )}
      <div>
        <h1>List Favourite User</h1>

        <ul style={{ display: "flex", flexDirection: "column" }}>
          {data.map((item) => (
            <li
              style={{
                listStyle: "none",
                border: "1px solid #dedede",
                padding: 12,
              }}
              key={item.id}
            >
              <div>Username: {item.name}</div>
              <div>
                Favourte:{" "}
                <span
                  onClick={() => handleToggleStatus(item.id)}
                  style={
                    item.favour === "liked"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                >
                  <HeartOutlined />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
