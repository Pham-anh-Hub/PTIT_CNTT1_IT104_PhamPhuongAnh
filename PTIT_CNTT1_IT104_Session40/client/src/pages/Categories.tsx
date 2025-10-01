import { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Modal, Pagination, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import type {
  CategoryFormValues,
  CategoryRow,
  CategoryStatus,
} from "../interfaces/data.interfaces";
import { useAppDispatch, useAppSelector } from "../redux/hooks/redux.hooks";
import {
  addNewCategory,
  deleteCategory,
  editCategory,
  filterCategoryList,
  getAllCategory,
} from "../apis/actionToCategories";

export default function Categories() {
  const dispatch = useAppDispatch();
  const rows = useAppSelector((state) => state.categories.filterCategories);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CategoryStatus | string >("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);
  const [isConfirm, setIsConfirm] = useState(false);
  const [deleting, setDeleting] = useState<CategoryRow | null>(null);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search ? r.name.toLowerCase().includes(search.toLowerCase()) : true
      )
      .filter((r) =>
        statusFilter && statusFilter !== "all" ? r.status === statusFilter : true
      );
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<CategoryRow> = [
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Mô tả", dataIndex: "description", key: "description" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: CategoryRow) {
    setEditing(row);
    setOpen(true);
  }

  function onDelete(id: string) {
    const targetDelete = filtered.find((target) => target.id === id);
    if (targetDelete) {
      setDeleting(targetDelete);
      setIsConfirm(true);
    }
  }

  function handleConfirm() {
    if (deleting) {
      dispatch(deleteCategory(deleting?.id));
      setIsConfirm(false);
    }
  }
  function handleCancelDelete() {
    setIsConfirm(false);
  }

  function onSubmit(values: CategoryFormValues) {
    const next: CategoryRow = {
      id: editing?.id ?? uuidv4(),
      name: values.name,
      description: values.description || "",
      status: values.status,
    };
    console.log(next);

    if (editing) {
      dispatch(editCategory(next));
    } else {
      dispatch(addNewCategory(next));
    }

    // setRows((prev) => {
    //   if (editing) return prev.map((r) => (r.id === editing.id ? next : r));
    //   return [...prev, next];
    // });
    setOpen(false);
  }

  const handleSearch = (value: string) => {
    dispatch(
      filterCategoryList({ targetFilter: statusFilter, keyword: value })
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý danh mục</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          style={{ width: "200px" }}
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => {
            setStatusFilter((v as CategoryStatus) || "");
            dispatch(filterCategoryList({ targetFilter: v, keyword: "" }));
          }}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng" },
          ]}
        />
        <Input
          placeholder="Tìm kiếm"
          style={{ width: "300px" }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>

      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Xác nhận"
        closable={true}
        open={isConfirm}
        onOk={handleConfirm}
        onCancel={handleCancelDelete}
      >
        <p>
          Xác nhận xóa danh mục <b>{`${deleting?.name}`}</b> ?
        </p>
      </Modal>
    </div>
  );
}
