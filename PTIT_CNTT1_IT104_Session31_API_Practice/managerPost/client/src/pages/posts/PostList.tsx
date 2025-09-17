import React from "react";
import {
  Button,
  Input,
  message,
  Modal,
  Select,
  Table,
  type TableProps,
} from "antd";
import type { Post } from "../../routes/postRoutes";
import axios from "axios";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import useDebounce from "../../hooks/useDebounce";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [actionStatus, setActionStatus] = useState<string>("add");
  const [titlePost, setTitlePost] = useState<string>("");
  const [imagePost, setImagePost] = useState<string>("");
  const [valueMarkDown, setValueMarkDown] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [targetBlock, setTargetBlock] = useState<Post | undefined>();
  const [targetUpdate, setTargetUpdate] = useState<Post | undefined>();
  const [openConfirmBlock, setOpenConfirmBlock] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [statusFilter, setStatusFilter] = useState<"active" | "inactive" | "">(
    ""
  );

  // Gọi custom hook useDebounce : delay và tối ưu hiệu năng khi người dùng tìm kiếm bài viết
  const debouceSearch = useDebounce(searchValue, 500);

  const loadPosts = () => {
    try {
      axios
        .get(
          `http://localhost:8080/posts/?title_like=${debouceSearch}${
            statusFilter ? `&status=${statusFilter}` : ""
          }`
        )
        .then((response) => {
          console.log("response data: ", response.data);
          setPosts(response.data);
        })
        .catch(() => {
          console.log("Lấy dữ liệu chưa thành công");
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadPosts();
    console.log(actionStatus);
  }, [debouceSearch, statusFilter]);

  const columns: TableProps<Post>["columns"] = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="text-center">{text}</p>,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      render: (name) => <p className="text-gray-900 text-[18px]">{name}</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (url) => (
        <div className=" flex justify-center">
          <img className="w-20 h-18 rounded-full" src={url} alt="" />
        </div>
      ),
    },
    {
      title: "Ngày viết",
      dataIndex: "createAt",
      key: "createAt",
      render: (date) => {
        const time = new Date(date);
        return <p>{time.toLocaleDateString("vi-VN")}</p>;
      },
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "tags",
      render: (_, { status }) => (
        <>
          {status === "active" ? (
            <div className="text-[#6D74D] border-1 border-[#9fd588] text-center rounded-md bg-[#F6FFED]">
              {"Đã xuất bản"}
            </div>
          ) : (
            <div className="text-center rounded-md border-1 border-[#D33A64] bg-[#FFF1F0] text-[#D33A64]">
              {"Ngừng xuất bản"}
            </div>
          )}
        </>
      ),
    },
    {
      title: "Chức năng",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-3">
          <Button
            style={{
              borderColor: "#FAAE16",
              backgroundColor: "#FAAE16",
              color: "#fff",
            }}
            onClick={() => handleBlockPost(Number(record.id))}
          >
            Chặn
          </Button>
          <Button
            style={{
              borderColor: "#ECAC58",
              backgroundColor: "#FFECCD",
              color: "#FAAE16",
            }}
            onClick={() => handleEditPost(Number(record.id))}
          >
            Sửa
          </Button>
          <Button
            style={{
              borderColor: "#D33A64",
              backgroundColor: "#FFF1F0",
              color: "#D33A64",
            }}
            onClick={() => handleDeletePost(Number(record.id))}
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  /** Thao tác với các nút Action */
  const handleBlockPost = (id: number) => {
    const cloneTarget = posts.find((item) => item.id === id);
    if (!cloneTarget) {
      return;
    }
    if (cloneTarget.status === "active") {
      setOpenConfirmBlock(true);
      console.log("cloneTarget: ", cloneTarget);
      setTargetBlock(cloneTarget);
    } else {
      messageApi.open({
        type: "warning",
        content: "Bài viết đã ngưng sản xuất",
      });
    }
  };
  const handleEditPost = (id: number) => {
    const cloneUpdate = posts.find((item) => item.id === id);
    if (cloneUpdate) {
      setIsOpenAddForm(true);
      setActionStatus("update");
      setTitlePost(String(cloneUpdate.title));
      setImagePost(String(cloneUpdate.image));
      setValueMarkDown(String(cloneUpdate.content));
      setTargetUpdate(cloneUpdate);
    }
  };
  const handleDeletePost = (id: number) => {};

  /** Hết khu vực thap tác action btn */

  /* Khu vực các hàm thao tác với các model */
  const handleOkBlock = () => {
    try {
      if (targetBlock?.status === "inactive") {
        messageApi.open({
          type: "info",
          content: "Bài viết đã ngưng sản xuất",
        });
      } else {
        axios
          .put(`http://localhost:8080/posts/${targetBlock?.id}`, {
            ...targetBlock,
            status: "inactive",
          })
          .then((response) => {
            console.log(response.statusText);
            loadPosts();
          })
          .catch(() => console.log("Thao tác không thành công"))
          .finally(() => setOpenConfirmBlock(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelBlock = () => {
    setOpenConfirmBlock(false);
  };

  const handleUpdatePost = () => {
    if (!titlePost || !imagePost || !valueMarkDown) {
      messageApi.open({
        type: "error",
        content: "Thông tin không được để trống",
      });
    } else {
      axios
        .put(`http://localhost:8080/posts/${targetUpdate?.id}`, {
          ...targetUpdate,
          title: titlePost,
          image: imagePost,
          content: valueMarkDown,
        })
        .then(() => {
          messageApi.open({
            type: "success",
            content: "Cập nhật bài viết thành công",
          });
          setImagePost("");
          setTitlePost("");
          setValueMarkDown("");
          setIsOpenAddForm(false);
          loadPosts();
          setActionStatus("add");
        })
        .catch(() => {
          messageApi.open({
            type: "error",
            content: "Cập nhật bài viết chưa thành công",
          });
        });
    }
  };

  const handleCancel = () => {
    setIsOpenAddForm(false);
    setImagePost("");
    setTitlePost("");
    setValueMarkDown("");
    loadPosts();
    setActionStatus("add");
  };
  /** Hết khu vực thao tác model*/

  /** Thao tác thêm mới bài viết  */
  const handleInputContent = (val?: string) => {
    if (val) {
      setValueMarkDown(val);
      // cập nhật state
    } else {
      setValueMarkDown("");
    }
  };

  const handleInputPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitlePost(value);
    } else if (name === "image") {
      setImagePost(value);
    }
  };
  const handleAddPost = () => {
    if (!titlePost || !imagePost || !valueMarkDown) {
      messageApi.open({
        type: "error",
        content: "Thông tin không được để trống",
      });
    } else {
      const exitedTitle = posts.find(
        (item) =>
          item.title?.trim().toLowerCase() === titlePost.toLowerCase().trim()
      );
      if (exitedTitle) {
        messageApi.open({
          type: "error",
          content: "Tên bài viết không được trùng",
        });
      } else {
        // Tiến hành tạo và thêm mới bài viết
        const newPost: Post = {
          title: titlePost,
          image: imagePost,
          createAt: String(new Date()),
          status: "active",
          content: String(valueMarkDown),
        };
        console.log("newPost: ", newPost);
        axios
          .post(`http://localhost:8080/posts`, newPost)
          .then(() => {
            messageApi.open({
              type: "success",
              content: "Thêm mới bài viết thành công",
            });
            loadPosts();
            setIsOpenAddForm(false);
            setImagePost("");
            setTitlePost("");
            setValueMarkDown("");
          })
          .catch(() => {
            messageApi.open({
              type: "error",
              content: "Thêm mới bài viết chưa thành công",
            });
          });
      }
    }
  };

  /** Tìm kiếm bài viết  */
  const handleSearchPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  /** Lọc bài viết*/
  const handleChange = (value: string) => {
    console.log("value: ", value);
    if (value === "active") {
      setStatusFilter("active");
    } else if (value === "inactive") {
      setStatusFilter("inactive");
    } else {
      setStatusFilter("");
    }
  };

  return (
    <>
      <h1 className="mt-5 w-[85%] text-2xl mx-[auto]">Quản lý bài viết</h1>
      <div className="w-[100%] flex flex-col items-center justify-between">
        <div className="w-[85%] flex justify-between mt-10 mb-5">
          <div className="flex gap-3">
            <Input
              value={searchValue}
              onChange={handleSearchPost}
              placeholder="Nhập từ khóa tìm kiếm"
            />
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "", label: "Lọc bài viết" },
                { value: "active", label: "Đã xuất bản" },
                { value: "inactive", label: "Ngưng xuất bản" },
              ]}
            />
          </div>
          <Button
            onClick={() => {
              setIsOpenAddForm(true);
              setActionStatus("add");
            }}
            type="primary"
          >
            Thêm mới bài viết
          </Button>
        </div>
        <div className="w-[85%]">
          <Table<Post> bordered columns={columns} dataSource={posts} />
        </div>
      </div>
      {/* Model thêm mới bài viết */}
      <Modal
        title={
          actionStatus === "add" ? "Thêm mới bài viết" : "Cập nhật bài viết"
        }
        closable={true}
        open={isOpenAddForm}
        onOk={actionStatus === "add" ? handleAddPost : handleUpdatePost}
        okText={actionStatus == "add" ? "Thêm" : " Cập nhật"}
        cancelText="Hủy"
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor="">
              <b>Tên bài viết</b>
            </label>
            <Input value={titlePost} onChange={handleInputPost} name="title" />
          </div>
          <div>
            <label htmlFor="">
              <b>Hình ảnh</b>
            </label>
            <Input value={imagePost} onChange={handleInputPost} name="image" />
          </div>
          <MDEditor
            value={valueMarkDown}
            onChange={handleInputContent}
            textareaProps={{
              placeholder: "Please enter Markdown text",
            }}
          />
        </div>
      </Modal>

      {/* Model xác nhận chặn bài viết */}
      {/* Hiển thị model xác nhận khi status của bài viết là active */}
      <Modal
        title="Xác nhận"
        closable={true}
        open={openConfirmBlock}
        onOk={handleOkBlock}
        okText="Xác nhận"
        onCancel={handleCancelBlock}
      >
        <p>
          Xác nhận ngừng xuất bàn bài viết <b>{`<${targetBlock?.title}>`}</b> ?
        </p>
      </Modal>
      {/* Hiển thị message khi status của bài viết là inactive */}
      {contextHolder}
    </>
  );
}
