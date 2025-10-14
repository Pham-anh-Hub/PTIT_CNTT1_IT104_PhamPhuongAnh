import { Button, Form, Input, message, Modal } from "antd";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import uncheckedIcon from "/images/uncheckIcon.png";
import CloseModal from "/images/ClosedModal.png";
import { templatesBackdrop, type Board, type User } from "../interfaces/board.interface";
import { useAppDispatch } from "../redux/reducHook/useHooks";
import { addNewBoard, editInfoBoard } from "../apis/user.data";
import { useParams } from "react-router-dom";

interface AddBoardProp {
  modalStatus: "edit" | "add";
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
  modalStatus,
}: AddBoardProp) {
  const { userId } = useParams();

  const [messageApi, contextHolder] = message.useMessage();

  const imageBackdrops = templatesBackdrop.filter((b) => b.type === "image");
  const gradientBackdrops = templatesBackdrop.filter(
    (b) => b.type === "gradient"
  );
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<string>(templatesBackdrop[0].bgImage);
  const [inputTitle, setInputTitle] = useState<string>(editing?.title ?? "");
  const [error, setError] = useState<string>("");
  const [form] = Form.useForm();

  // Hàm thêm mới Board
  const handleAddBoard = () => {
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
    const newBoard: Board = {
      id: uuidv4(),
      backdrop: choosedBackdrop ?? templatesBackdrop[0],
      title: inputTitle,
      is_create: String(new Date()),
      is_starred: false,
      is_closed: false,
      description: "",
      lists: [],
    };
    if(currentUser){
      dispatch(addNewBoard({ id: String(userId), newBoard }));
      const updatedBoards = [...currentUser.boards, newBoard];
      localStorage.setItem("userLoggined", JSON.stringify({ ...currentUser, boards: updatedBoards })
      );
    }
    setIsOpenModal(!isModalOpen); // đóng modal
    form.resetFields();
    setChecked(templatesBackdrop[0].bgImage);
  };

  // Hàm sửa thông tin board
  const handleEditBoard = () => {
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
    const editBoard : Board = {
      ...editing as Board,
      title: inputTitle,
      backdrop: choosedBackdrop ?? editing?.backdrop ?? templatesBackdrop[0],
    };
    if (currentUser) {
      dispatch(editInfoBoard({ id: String(userId), editBoard: editBoard }));
      const updatedBoards = currentUser.boards.map((board) => board.id === editBoard.id ? { ...board, ...editBoard } : board);
      localStorage.setItem("userLoggined",JSON.stringify({ ...currentUser, boards: updatedBoards }));
    }
    setIsOpenModal(!isModalOpen); // đóng modal
    form.resetFields();
    setChecked(templatesBackdrop[0].bgImage);
  };

  const handleCancelAdd = () => {
    setIsOpenModal(!isModalOpen); // đóng modal
    form.resetFields();
    setChecked(templatesBackdrop[0].bgImage);
    setError("")
  };

  useEffect(() => {
    if (editing) {
      setChecked(editing.backdrop.bgImage);
      form.setFieldsValue({ boardTitle: editing.title });
    } else {
      form.resetFields();
    }
  }, [editing, dispatch, form]);

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
              onClick={modalStatus === "edit" ? handleEditBoard : handleAddBoard}
              variant="outlined"
              type="primary"
              color="primary"
            >
              {modalStatus === "edit" ? "Save" : "Create"}
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
