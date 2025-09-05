import {
  DeleteOutlined,
  EditOutlined,
  InboxOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import React from "react";

interface BookType {
  id: string;
  name: string;
}

type PropType = {
  bookList: BookType[];
  editBook: (book: BookType) => void;
  deleteBook: (book: BookType) => void;
};

export default function TableBook({
  bookList,
  editBook,
  deleteBook,
}: PropType) {
  const handleEditBook = (book: BookType) => {
    editBook(book);
  };
  const handleDeleteBook = (book: BookType) => {
    deleteBook(book);
  };
  return (
    <div>
      {" "}
      <table>
        <thead>
          <th>ID</th>
          <th>
            Tiêu đề <SortAscendingOutlined />
          </th>
          <th>Hành động</th>
        </thead>
        <tbody>
          {bookList.length === 0 ? (
            <>
              <tr>
                <td
                  style={{ color: "#cbcbcb", textAlign: "center" }}
                  colSpan={3}
                >
                  <InboxOutlined
                    style={{ fontWeight: "500", fontSize: "60px" }}
                  />
                  <h2 style={{ fontWeight: "500" }}>Danh sách trống</h2>
                </td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {bookList.map((item: BookType, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td className="action-btn">
                <EditOutlined
                  onClick={() => handleEditBook(item)}
                  className="edit-btn"
                />
                <DeleteOutlined
                  onClick={() => handleDeleteBook(item)}
                  className="delete-btn"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
