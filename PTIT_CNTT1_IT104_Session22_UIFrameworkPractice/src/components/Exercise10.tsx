import React, { useState } from "react";
import {
  BarChartOutlined,
  SettingOutlined,
  TableOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType, TableProps } from "antd";
import { Layout, Menu, Switch, Table, theme } from "antd";
import { Button, Pagination } from "react-bootstrap";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

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
  getItem("Overview", "1", <BarChartOutlined />),
  getItem("CRUD", "2", <TableOutlined />),
  getItem("Settings", "3", <SettingOutlined />),
];

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

interface DataType {
  key: number;
  photo: string;
  name: string;
  date: string;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Photo",
    dataIndex: "photo",
    render: () => <img src="#" alt="photo" />,
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "",
    dataIndex: "",
    render: () => (
      <Switch
        style={{ backgroundColor: "gray" }}
        defaultChecked
        onChange={onChange}
      />
    ),
  },
  {
    title: "Action",
    dataIndex: "",
    render: () => (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button color="default" variant="dashed">
          Sửa
        </Button>
        <Button variant="danger">Xóa</Button>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: 1,
    photo: "",
    name: "John Brown",
    date: "09 Apr 2021",
    address: "New York No. 1 Lake Park",
  },
  {
    key: 2,
    photo: "",
    name: "John Brown",
    date: "26 Jan 2021",
    address: "New York No. 1 Lake Park",
  },
  {
    key: 3,
    photo: "",
    name: "John Brown",
    date: "27 Jan 2018",
    address: "New York No. 1 Lake Park",
  },
  {
    key: 4,
    photo: "",
    name: "John Brown",
    date: "10 Dec 2017",
    address: "New York No. 1 Lake Park",
  },
  {
    key: 5,
    photo: "",
    name: "John Brown",
    date: "09 Dec 2017",
    address: "New York No. 1 Lake Park",
  },
];

const App: React.FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
        <div>
          <Menu
            color="#91caff"
            style={{ padding: "10px", borderRadius: "8px" }}
            items={items}
          />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #dadada",
            height: "fit-content",
          }}
        >
          <div
            style={{
              marginTop: "12px",
              backgroundColor: "#f5f5f5",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <p
              style={{
                margin: "0",
                border: "1px solid #dadada",
                backgroundColor: "#fff",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
                borderBottom: "0",
                padding: "0px 25px",
              }}
            >
              Users
            </p>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          {/* Table data */}
          <div
            style={{
              margin: 24,
              minHeight: "fit-content",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              padding: "15px",
            }}
          >
            {/* Title */}
            <h4>Use Detail</h4>
            {/* Table */}
            <Table<DataType>
              rowSelection={{ type: selectionType, ...rowSelection }}
              columns={columns}
              dataSource={data}
              bordered={true}
              pagination={false}
            />
            {data.map((item) => {
              items.push(
                <Pagination.Item key={item.key} active={item.key === active}>
                  {item.key}
                </Pagination.Item>
              );
            })}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
