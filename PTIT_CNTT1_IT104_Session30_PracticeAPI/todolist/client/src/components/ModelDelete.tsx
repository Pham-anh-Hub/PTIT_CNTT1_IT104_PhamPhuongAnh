import { Modal } from "antd";
import React from "react";

interface Task {
  id: number;
  name: string;
  status: boolean;
}


type PropType={
    isOpenModel:boolean,
    setIsOpenModel: (status : boolean) => void
    targetDelete?: Task
    handleOk : () => void
}

export default function ModelDelete({isOpenModel, setIsOpenModel, targetDelete, handleOk} : PropType) {

  const handleCancel = () => {
    setIsOpenModel(false);
  };
  return (
    <div>
      <Modal
        title="Xác nhận"
        closable={true}
        open={isOpenModel}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>Bạn xác nhận xóa {`<${targetDelete?.name}>`} ?</p>
      </Modal>
    </div>
  );
}
