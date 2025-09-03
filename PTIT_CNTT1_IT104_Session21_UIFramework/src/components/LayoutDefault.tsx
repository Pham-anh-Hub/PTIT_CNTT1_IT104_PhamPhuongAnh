import React, { useState } from "react";
import {
  BellOutlined,
  DollarOutlined,
  FileOutlined,
  PieChartOutlined,
  ReloadOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type {
  MenuProps,
  PaginationProps,
  TableColumnsType,
  TableProps,
} from "antd";
import {
  Avatar,
  Breadcrumb,
  Button,
  // Divider,
  Input,
  Layout,
  Menu,
  Pagination,
  // Radio,
  Table,
  theme,
} from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
interface DataType {
  key: number;
  name: string;
  dOb: string;
  gender: string;
  email: string;
  address: string;
  phone: string;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Tổng quan", "1", <PieChartOutlined />),
  getItem("Quản lý tiền lương", "2", <DollarOutlined />),
  getItem("Quản lý nhân sự", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Quản lý đào tạo", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "7"),
  ]),
  getItem("Quản lý tài liệu", "sub3", <FileOutlined />, [
    getItem("Team 1", "8"),
    getItem("Team 2", "9"),
  ]),
];

//

const columns: TableColumnsType<DataType> = [
  {
    title: "Họ và tên",
    dataIndex: "name",
    render: (text: string) => <p>{text}</p>,
  },
  {
    title: "Ngày sinh",
    dataIndex: "dOb",
  },
  {
    title: "Giới tính",
    dataIndex: "gender",
  },
  {
    title: "Email",
    dataIndex: "address",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
  },
  {
    title: "Hành động",
    dataIndex: "action",
    render: () => (
      <div className="flex gap-2.5">
        <Button color="default" variant="dashed">
          Sửa
        </Button>
        <Button color="danger" variant="solid">
          Xóa
        </Button>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "New York No. 1 Lake Park",
    phone: "0987654321",
  },
  {
    key: 2,
    name: "Jim Green",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "London No. 1 Lake Park",
    phone: "0987654321",
  },
  {
    key: 3,
    name: "Joe Black",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "Sydney No. 1 Lake Park",
    phone: "0987654321",
  },
  {
    key: 4,
    name: "Disabled User",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "Sydney No. 1 Lake Park",
    phone: "0987654321",
  },
  {
    key: 5,
    name: "John Brown",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "New York No. 1 Lake Park",
    phone: "0987654321",
  },
  {
    key: 6,
    name: "Jim Green",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "London No. 1 Lake Park",
    phone: "0987654321",
  },
  {
    key: 7,
    name: "Joe Black",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "Sydney No. 1 Lake Park",
    phone: "0987654321",
  },
  {
    key: 8,
    name: "Disabled User",
    dOb: "20/10/2020",
    gender: "Nam",
    email: "abc@gmail.com",
    address: "Sydney No. 1 Lake Park",
    phone: "0987654321",
  },
];

const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    // disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};
const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

const LayoutDefault: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="flex items-center justify-between"
          style={{ padding: 10, background: colorBgContainer }}
        >
          {/* ô nhập liệu tìm kiếm */}
          <Input.Search
            placeholder="Nhập từ khóa tìm kiếm"
            style={{ width: "350px" }}
          />
          <div className="flex gap-2.5">
            <BellOutlined size={35} />
            <Avatar size={25} icon={<UserOutlined />} />
          </div>
        </Header>
        {/* Content main */}
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[
              { title: "Quản lý nhân sự" },
              { title: "Quản lý nhân viên" },
              { title: "Danh sách nhân viên" },
            ]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Thêm mới */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 className="text-2xl font-semibold">Nhân viên</h1>
              <Button type="primary">Thêm mới nhân viên</Button>
            </div>
            {/* Tìm kiếm nhân viên */}
            <div className="flex gap-2.5 align-middle justify-end my-5">
              <Input.Search placeholder="Tìm kiếm nhân viên" />
              <ReloadOutlined />
            </div>
            {/* Table danh sách */}
            <div>
              <Table<DataType>
                rowSelection={{ type: "checkbox", ...rowSelection }}
                columns={columns}
                dataSource={data}
                pagination={false}
              />
            </div>
            {/* Pagination */}
            <div>
              <Pagination
                style={{
                  display: "flex",
                  justifyContent: "end",
                  margin: "20px 0px",
                }}
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={100}
              />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutDefault;
