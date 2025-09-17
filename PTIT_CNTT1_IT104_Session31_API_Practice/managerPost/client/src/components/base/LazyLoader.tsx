import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Suspense } from "react";

const LazyLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      }
    >
      {children}
    </Suspense>
  );
};
export default LazyLoader