import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleChange = () => {};

  /**
   * Thao tác cùng modal thêm mới
   * Các hàm set đóng mở
   */
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-gray-800 text-3xl">Danh sách công việc</h1>
      <div className="flex items-center gap-2 self-end">
        <Select
          defaultValue=""
          style={{ width: "fit-content" }}
          onChange={handleChange}
          options={[
            { value: "", label: "Lọc theo cấp độ" },
            { value: "pressing", label: "Khẩn cấp" },
            { value: "vital", label: "Quan trọng" },
            { value: "normal", label: "Bình thường" },
            { value: "imnormal", label: "Không quan trọng" },
          ]}
        />
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Thêm
        </Button>
      </div>
      <Modal
        title="Thêm mới công việc"
        closable={true}
        open={isModalOpen}
        onOk={handleOk}
        okText="Thêm"
        cancelText="Hủy"
        onCancel={handleCancel}
      >
        <div>
          <label htmlFor="">Tên công việc</label>
          <Input />
        </div>
        <div>
          <label htmlFor="">Cấp độ</label>
          <div style={{margin:0}} className="flex justify-center items-center w-[100%]">
            <div className="flex items-center">
              <Input type="radio" />
              <label className="" htmlFor="">Khẩn cấp</label>
            </div>
            <div className="flex items-center">
              <Input type="radio" />
              <label className="" htmlFor="">Quan trọng</label>
            </div>
            <div className="flex items-center">
              <Input type="radio" />
              <label className="" htmlFor="">Bình thường</label>
            </div>
            <div className="flex items-center">
              <Input type="radio" />
              <label className="" htmlFor="">Không quan trọng</label>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
