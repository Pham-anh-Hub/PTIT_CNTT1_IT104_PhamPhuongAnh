import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  message,
  Modal,
  Pagination,
  Select,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import type {
  ProductFormValues,
  ProductRow,
  ProductStatus,
} from "../interfaces/data.interfaces";
import { useAppDispatch, useAppSelector } from "../redux/hooks/redux.hooks";
import {
  addProduct,
  deleteProduct,
  editProductInfo,
  filterProductList,
  getAllProducts,
} from "../apis/actionToProducts";

export default function Products() {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useAppDispatch();
  const rows = useAppSelector((state) => state.products.filterProducts);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [_file, setFile] = useState<File | undefined>(undefined);
  const [progress, setProgress] = useState({ uploading: false, pc: 0 });
  const pageSize = 4;

  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);
  const [deleting, setDeleting] = useState<ProductRow | null>(null);

  useEffect(() => {
    dispatch(getAllProducts());
    console.log(rows);
  }, []);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<ProductRow> = [
    { title: "Mã", dataIndex: "code", key: "code", width: 120 },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Danh mục", dataIndex: "category", key: "category", width: 160 },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (v: number) => v.toLocaleString() + " đ",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
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

  // Hàm được tích hợp khi nhấn nút thêm sản phẩm
  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  // Hàm nhận thông tin và edit sản phẩm
  function onEdit(row: ProductRow) {
    console.log(row);
    setEditing(row);
    setImageUrl(row.image ?? "");
    setOpen(true);
  }

  // Hãm xóa nhận vào thông tin và xóa sản phẩm
  function onDelete(id: string) {
    const target = rows.find((r) => r.id === id);
    if (target) {
      setDeleting(target);
      setConfirm(true);
      console.log(target);
    }
  }

  const handleConfirm = () => {
    if (deleting) {
      dispatch(deleteProduct(deleting?.id));
      messageApi.open({
        type: "success",
        content: "Xóa sản phẩm thành công",
      });
      setConfirm(false);
    }
  };

  const handleCancelDelete = () => {
    setConfirm(false);
  };

  // Hàm upload ảnh
  const uploadImage = async (file: File | undefined) => {
    setProgress({ ...progress, uploading: true });
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ecomerce_demo");
        formData.append("cloud_name", "phamphuonganh");
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/phamphuonganh/image/upload",
          formData,
          {
            onUploadProgress(progressEvent) {
              setProgress((prevState) => {
                return { ...prevState, pc: progressEvent.progress * 100 };
              });
            },
          }
        );
        console.log(response.data.url);
        setImageUrl(response.data.url);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("ok");
        setProgress({ ...progress, uploading: false });
        messageApi.open({
          type: "success",
          content: "Hình ảnh đã tải lên thành công",
        });
      }
    }
  };

  //  Hàm nhận vào file mà người dùng chọn
  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileUp = e.target.files?.[0];
    setFile(fileUp);
    uploadImage(fileUp);
  };

  // Hàm nhận vào thông tin --> thêm sản phẩm / sửa sản phẩm
  async function onSubmit(values: ProductFormValues) {
    if (progress.uploading) {
      messageApi.open({
        type: "warning",
        content: "Hình ảnh đang tải lên",
      });
      return;
    }
    if (imageUrl === "") {
      messageApi.open({
        type: "error",
        content: "Hình ảnh không để trống",
      });
      return;
    }
    const next: ProductRow = {
      id: editing?.id ?? uuidv4(),
      code: values.code,
      name: values.name,
      category: values.category,
      price: Number(values.price) || 0,
      image: String(imageUrl),
      status: values.status,
    };
    console.log(next);

    if (editing) {
      console.log("edit ", next);
      dispatch(editProductInfo({ ...editing, ...next }));
    } else {
      dispatch(addProduct(next));
    }

    setOpen(false);
    setImageUrl(null);
  }

  const handleSearch = (value: string) => {
    dispatch(filterProductList({ targetFilter: statusFilter, keyword: value }));
  };

  return (
    <div className="space-y-4">
      {/* Khối chứa button thêm sản phẩm */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      {/* Khối lọc và tìm kiếm */}
      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => {
            setStatusFilter((v as ProductStatus) || "");
            dispatch(filterProductList({ targetFilter: v, keyword: "" }));
          }}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>

      {/* Bảng hiển thị thông tin sản phẩm */}
      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      {/* Khối phân trang */}
      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      {/* Modal kèm form thêm / sửa thông tin sản phẩm */}
      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
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
            name="code"
            label="Mã"
            rules={[{ required: true, message: "Nhập mã" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Chọn danh mục" }]}
          >
            <Select
              options={[
                { value: "1", label: "Danh mục 1" },
                { value: "2", label: "Danh mục 2" },
                { value: "3", label: "Danh mục 3" },
              ]}
              placeholder="Nhập tên danh mục"
            />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item label="Ảnh sản phẩm">
            <input type="file" onChange={handleInputFile} />
            {imageUrl && <Image src={imageUrl} width={80} />}
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

      {/* Modal xác nhạn xóa sản phẩm */}
      <Modal
        title="Xác nhận"
        closable={true}
        open={confirm}
        onOk={handleConfirm}
        onCancel={handleCancelDelete}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>
          Xác nhận xóa sản phẩm <b>{`${deleting?.name}`}</b> ?
        </p>
      </Modal>

      {contextHolder}
    </div>
  );
}
