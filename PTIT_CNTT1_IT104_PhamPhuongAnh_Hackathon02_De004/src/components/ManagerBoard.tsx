import React, { useState } from "react";
import InputTask from "./InputTask";

import TableBook from "./TableBook";
import { Button, Form, Input, Modal, type FormProps } from "antd";

interface BookType {
  id: string;
  name: string;
}

type FieldType = {
  name?: string;
};

export default function ManagerBoard() {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [targetEdit, setTargetEdit] = useState<BookType | undefined>(undefined);
  const [targetDelete, setTargetDelete] = useState<BookType | undefined>(
    undefined
  );
  const [bookList, setBookList] = useState<BookType[]>(() => {
    const listBook = localStorage.getItem("listBook");
    return listBook ? JSON.parse(listBook) : [];
  });
  const addNewBook = (newBook: BookType) => {
    const newListUpdate = [...bookList, newBook];
    console.log(newListUpdate);
    setBookList(newListUpdate);
    localStorage.setItem("listBook", JSON.stringify(newListUpdate));
  };

  const editBookInfo = (book: BookType) => {
    setShowModalEdit(true);
    setTargetEdit(book);
  };

  const deleteBook = (book: BookType) => {
    console.log("Xóa sách: ", book.name);

    setOpenConfirm(true);
    setTargetDelete(book);
  };

  // Thao tác với modal và form edit
  const onCancelEdit = () => {
    setShowModalEdit(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (values.name && targetEdit) {
      const updateListEdit = bookList.map((item: BookType) =>
        item.id === targetEdit?.id ? { ...item, name: values.name } : item
      );
      setBookList(updateListEdit);
      localStorage.setItem("listBook", JSON.stringify(updateListEdit));
      setShowModalEdit(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  // Thao tác với modal confirm
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      const updateListDelete = bookList.filter(
        (item: BookType) => item.id !== targetDelete?.id
      );
      setBookList(updateListDelete);
      localStorage.setItem("listBook", JSON.stringify(updateListDelete));
      setConfirmLoading(false);
      setOpenConfirm(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpenConfirm(false);
  };
  return (
    <>
      <div className="main-manager">
        <InputTask addNewBook={addNewBook} />
        <TableBook
          editBook={editBookInfo}
          bookList={bookList}
          deleteBook={deleteBook}
        />
      </div>
      {showModalEdit ? (
        <>
          {" "}
          <Modal
            title="Cập nhật sách"
            closable={{ "aria-label": "Custom Close Button" }}
            onCancel={onCancelEdit}
            open={showModalEdit}
            footer={null}
          >
            {/* Form sửa thông tin */}
            <Form
              name="basic"
              initialValues={targetEdit}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item<FieldType> label={<b>Tên sách:</b>} name="name">
                <Input
                  style={{ display: "flex", justifyContent: "flex-start" }}
                />
              </Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <Button htmlType="submit" type="primary">
                  Lưu
                </Button>
                <Button onClick={onCancelEdit} type="default">
                  Hủy
                </Button>
              </div>
            </Form>
          </Modal>
        </>
      ) : (
        <></>
      )}
      {openConfirm ? (
        <>
          <Modal
            title="Xác nhận"
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            open={openConfirm}
          >
            {targetDelete ? (
              <>
                <p>Bạn chắc chắn xóa {targetDelete.name}</p>
              </>
            ) : (
              <></>
            )}
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
