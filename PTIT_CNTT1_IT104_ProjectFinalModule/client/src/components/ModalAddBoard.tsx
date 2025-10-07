import { Button, Form, Input, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import uncheckedIcon from "/images/uncheckIcon.png";
import CloseModal from "/images/ClosedModal.png";
import type { Board, User } from "../interfaces/board.interface";
import { useAppDispatch } from "../redux/reducHook/useHooks";
import { addNewBoard, editInfoBoard } from "../apis/user.data";
import { useParams } from "react-router-dom";

interface AddBoardProp {
  userList: User[];
  editing?: Board;
  isModalOpen: boolean;
  setIsOpenModal: (value: boolean) => void;
}
type FieldType = {
  boardTitle?: string;
};

// Lấy dữ liệu người dùng đăng nhập từ local
const userLoggined = (): User | null => {
  const cloneAccount = localStorage.getItem("userLoggined");
  return cloneAccount ? JSON.parse(cloneAccount) : null;
};
const currentUser: User | undefined = userLoggined() ?? undefined;

export default function ModalAddBoard({
  isModalOpen,
  setIsOpenModal,
  editing,
}: AddBoardProp) {
  const { userId } = useParams();

  const [messageApi, contextHolder] = message.useMessage();
  const templatesBackdrop = [
    {
      id: "1",
      type: "image",
      bgImage: "/images/mockImg1.jpg",
    },
    {
      id: "2",
      type: "image",
      bgImage: "/images/mockImage2.jpg",
    },
    {
      id: "3",
      type: "image",
      bgImage: "/images/mockImage3.jpg",
    },
    {
      id: "4",
      type: "image",
      bgImage: "/images/mockImg4.jpg",
    },
    {
      id: "5",
      type: "gradient",
      bgImage: "linear-gradient(to right bottom, #FFB100, #FA0C00)",
    },
    {
      id: "6",
      type: "gradient",
      bgImage: "linear-gradient(to right bottom, #2609FF, #D20CFF)",
    },
    {
      id: "7",
      type: "gradient",
      bgImage: "linear-gradient(to right bottom, #00FF2F, #00FFC8)",
    },
    {
      id: "8",
      type: "gradient",
      bgImage: "linear-gradient(to right bottom, #00FFE5, #004BFA)",
    },
    {
      id: "9",
      type: "gradient",
      bgImage: "linear-gradient(to right bottom, #FFA200, #EDFA00)",
    },
    {
      id: "10",
      type: "gradient",
      bgImage: "linear-gradient(to right bottom, #FF00EA, #FA0C00)",
    },
  ];
  const imageBackdrops = templatesBackdrop.filter((b) => b.type === "image");
  const gradientBackdrops = templatesBackdrop.filter(
    (b) => b.type === "gradient"
  );
  const dispatch = useAppDispatch();
  // const [editingBoard, setEditingBoard] = useState<Board | undefined>(editing)
  const [checked, setChecked] = useState<string>(templatesBackdrop[0].bgImage);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [form] = Form.useForm();

  const handleAddBoard = () => {
    console.log(inputTitle, checked);

    if (!inputTitle) {
      messageApi.open({
        type: "error",
        content: "Dữ liệu không để trống",
      });
      setError("error");
      return;
    }
    const choosedBackdrop = templatesBackdrop.find(
      (bg) => bg.bgImage === checked
    );
    if (currentUser) {
      if (!editing) {
        const newBoard: Board = {
          id: uuidv4(),
          backdrop: choosedBackdrop ?? templatesBackdrop[0],
          title: inputTitle,
          is_create: String(new Date()),
          is_starred: false,
          description: "",
          lists: [],
        };
        dispatch(addNewBoard({ id: String(userId), newBoard: newBoard }));

        localStorage.setItem(
          "userLoggined",
          JSON.stringify({
            ...currentUser,
            boards: [...currentUser.boards, newBoard],
          })
        );
      } else {
        const editBoard = {
          ...editing,
          title: inputTitle,
          backdrop: choosedBackdrop ?? editing.backdrop,
        };
        console.log(editBoard);

        dispatch(editInfoBoard({ id: String(userId), editBoard: editBoard }));
        localStorage.setItem(
          "userLoggined",
          JSON.stringify({
            ...currentUser,
            boards: [...currentUser.boards, { ...editBoard }],
          })
        );
      }
    }

    setIsOpenModal(!isModalOpen); // đóng modal
    form.resetFields();
    setChecked(templatesBackdrop[0].bgImage);
  };
  const handleCancelAdd = () => {
    setIsOpenModal(!isModalOpen); // đóng modal
    form.resetFields();
    setChecked(templatesBackdrop[0].bgImage);
  };

  useEffect(() => {
    if (editing) {
      console.log(editing);
      setChecked(editing.backdrop.bgImage);
      form.setFieldsValue({ boardTitle: editing.title });
    } else {
      form.resetFields();
    }
  }, [editing, dispatch]);

  return (
    <>
      <Modal
        title={
          <p className="text-[20px]" style={{ fontWeight: "500" }}>
            Create Board
          </p>
        }
        closeIcon={
          <div onClick={handleCancelAdd}>
            <img className="w-4 h-4" src={CloseModal} alt="" />
          </div>
        }
        open={isModalOpen}
        footer={
          <>
            <Button
              onClick={handleCancelAdd}
              variant="outlined"
              type="primary"
              color="danger"
            >
              Close
            </Button>
            <Button
              onClick={handleAddBoard}
              variant="outlined"
              type="primary"
              color="primary"
            >
              {editing ? "Save" : "Create"}
            </Button>
          </>
        }
      >
        {/* diver */}
        <div
          style={{
            fontWeight: "500",
            borderTop: "1px solid #DEE2E6",
            padding: "10px 0",
          }}
        ></div>
        {/* Background Image */}
        <div>
          <h3 className="text-[20px] my-2">Background</h3>
          <ul className="grid grid-cols-4 gap-1">
            {imageBackdrops.map((item, index) => (
              <li
                onClick={() => setChecked(item.bgImage)}
                key={index}
                style={{
                  display: "flex",
                  cursor: "pointer",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "60px",
                  borderRadius: "6px",
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  style={
                    item.bgImage === checked
                      ? { backgroundColor: "#00FF00" }
                      : { backgroundColor: "transparent" }
                  }
                  className="1 w-5 h-5 rounded-full"
                  src={uncheckedIcon}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* diver */}
        <div
          style={{
            fontWeight: "500",
            borderBottom: "1px solid #DEE2E6",
            padding: "10px 0",
          }}
        ></div>
        {/* Colors Image */}
        <div>
          <h3 className="text-[20px] my-2">Color</h3>
          <ul className="grid grid-cols-6 gap-1">
            {gradientBackdrops.map((item) => (
              <li
                onClick={() => setChecked(item.bgImage)}
                key={item.id}
                style={{
                  display: "flex",
                  cursor: "pointer",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "50px",
                  borderRadius: "6px",
                  backgroundImage: item.bgImage,
                }}
              >
                <img
                  style={
                    item.bgImage === checked
                      ? { backgroundColor: "#00FF00" }
                      : { backgroundColor: "transparent" }
                  }
                  className="1 w-5 h-5 rounded-full"
                  src={uncheckedIcon}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* diver */}
        <div
          style={{
            fontWeight: "500",
            borderBottom: "1px solid #DEE2E6",
            padding: "15px 0",
          }}
        ></div>
        <Form form={form} layout="vertical">
          <Form.Item<FieldType>
            label={<h3 className="text-[20px] my-2">Board Title</h3>}
            name="boardTitle"
            rules={[{ required: true, message: "Please input board title!" }]}
          >
            <Input
              status={error !== "" ? "error" : ""}
              onChange={(v) => {
                setError("");
                setInputTitle(v.target.value);
              }}
              className="h-[50px]"
              placeholder="E.g. Shopping list for birthday..."
            />
          </Form.Item>
        </Form>
      </Modal>
      {contextHolder}
    </>
  );
}
