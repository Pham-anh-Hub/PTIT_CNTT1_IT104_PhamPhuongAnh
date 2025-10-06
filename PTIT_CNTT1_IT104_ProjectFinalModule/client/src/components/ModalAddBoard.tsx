import { Alert, Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import mockImage1 from "../assets/mockImg1.jpg";
import mockImage2 from "../assets/mockImage2.jpg";
import mockImage3 from "../assets/mockImage3.jpg";
import mockImage4 from "../assets/mockImg4.jpg";
import uncheckedIcon from "../assets/uncheckIcon.png";
import type { Board } from "../interfaces/board.interface";

interface AddBoardProp {
  editing?: Board;
  isModalOpen: boolean;
  setIsOpenModal: (value: boolean) => void;
}
type FieldType = {
  boardTitle?: string;
};

export default function ModalAddBoard({
  isModalOpen,
  setIsOpenModal,
  editing,
}: AddBoardProp) {
  const templatesImg = [
    {
      id: 1,
      image: mockImage1,
    },
    {
      id: 2,
      image: mockImage2,
    },
    {
      id: 3,
      image: mockImage3,
    },
    {
      id: 4,
      image: mockImage4,
    },
  ];
  const colorsGradient = [
    {
      id: 5,
      fColor: "#FFB100",
      sColor: "#FA0C00",
    },
    {
      id: 6,
      fColor: "#2609FF",
      sColor: "#D20CFF",
    },
    {
      id: 7,
      fColor: "#00FF2F",
      sColor: "#00FFC8",
    },
    {
      id: 8,
      fColor: "#00FFE5",
      sColor: "#004BFA",
    },
    {
      id: 9,
      fColor: "#FFA200",
      sColor: "#EDFA00",
    },
    {
      id: 10,
      fColor: "#FF00EA",
      sColor: "#FA0C00",
    },
  ];

  const [checked, setChecked] = useState<number>(
    editing ? Number(editing.id) : 1
  );
  const [inputTitle, setInputTitle] = useState<string>("");
  const [form] = Form.useForm();
  const handleAddBoard = () => {
    const titleBoard = form.getFieldValue(inputTitle);
    // xử lý tạo board
    if (!titleBoard || !checked) {
      console.log("Errorr");
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />;
    }

    setIsOpenModal(false); // đóng modal
    form.resetFields();
    setChecked(1);
  };
  const handleCancelAdd = () => {
    setIsOpenModal(false); // đóng modal
    form.resetFields();
    setChecked(1);
  };

  useEffect(() => {
    if (editing) {
      setChecked(Number(editing.id));
      form.setFieldsValue({ boardTitle: editing.title });
    } else {
      form.resetFields();
    }
  }, [editing]);

  return (
    <>
      <Modal
        title={
          <p className="text-[20px]" style={{ fontWeight: "500" }}>
            Create Board
          </p>
        }
        closable={true}
        open={isModalOpen}
        onOk={handleAddBoard}
        onCancel={handleCancelAdd}
        footer={
          <>
            <Button variant="outlined" type="primary" color="danger">
              Close
            </Button>
            <Button variant="outlined" type="primary" color="primary">
              Create
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
            {templatesImg.map((item, index) => (
              <li
                onClick={() => setChecked(item.id)}
                key={index}
                style={{
                  display: "flex",
                  cursor: "pointer",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "60px",
                  borderRadius: "6px",
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  style={
                    item.id === checked
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
            {colorsGradient.map((item) => (
              <li
                onClick={() => setChecked(item.id)}
                key={item.id}
                style={{
                  display: "flex",
                  cursor:"pointer",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "50px",
                  borderRadius: "6px",
                  backgroundImage: `linear-gradient(to right bottom, ${item.fColor}, ${item.sColor})`,
                }}
              >
                <img
                  style={
                    item.id === checked
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={(v) => setInputTitle(v.target.value)}
              className="h-[50px]"
              placeholder="E.g. Shopping list for birthday..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
