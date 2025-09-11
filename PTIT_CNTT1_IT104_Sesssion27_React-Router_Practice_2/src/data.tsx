export interface IDataTask {
  id: number;
  title: string;
  description: string;
}

export const tasks: IDataTask[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Routes và useNavigate",
  },
  {
    id: 2,
    title: "Ôn lại Tailwind",
    description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoàn thành BTVN",
    description: "Đẩy code lên GitHub và nộp link",
  },
];

export interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 29990000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26990000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 28990000,
    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 31990000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];

export interface Post {
  id: number;
  title: string;
  except: string;
  content:string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    except: "Giới thiệu về React và cách khởi tạo dự án...",
    content: "Trong phần học này, bạn sẽ được làm quen với thư viện React - một trong những thư viện JavaScript phổ biến nhất hiện nay để xây dựng giao diện người dùng. Bạn sẽ tìm hiểu cách cài đặt môi trường phát triển bằng Node.js và npm, sau đó khởi tạo một dự án React mới bằng create-react-app hoặc Vite. Ngoài ra, bạn sẽ được giới thiệu khái niệm Component, Props và State, đây là ba yếu tố nền tảng quan trọng giúp React trở nên mạnh mẽ. Cuối cùng, bạn sẽ thực hành tạo ra ứng dụng React đầu tiên hiển thị một số thành phần cơ bản trên màn hình."
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    except: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
    content: "Trong khóa học này, bạn sẽ học cách tích hợp TailwindCSS vào dự án React để tận dụng phong cách utility-first CSS. Bạn sẽ tìm hiểu cách sử dụng các class sẵn có để xây dựng giao diện nhanh chóng mà không cần viết CSS thủ công. Các chủ đề bao gồm responsive design, dark mode, custom theme và cách mở rộng cấu hình mặc định của Tailwind để phù hợp với dự án thực tế. Cuối cùng, bạn sẽ được hướng dẫn cách kết hợp Tailwind với các component library phổ biến để tăng tốc quá trình phát triển sản phẩm."
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    except: "Điều hướng trong React với React Router DOM...",
    content: "Phần học này sẽ tập trung vào cách sử dụng React Router DOM để điều hướng trong ứng dụng React. Bạn sẽ tìm hiểu cách định nghĩa Route cơ bản, tạo Nested Route, sử dụng Outlet để hiển thị component con, và NavLink để hiển thị menu điều hướng với trạng thái active. Ngoài ra, bạn sẽ được hướng dẫn cách sử dụng useParams, useNavigate để làm việc với tham số URL và điều hướng lập trình. Phần nâng cao sẽ giới thiệu cách bảo vệ route bằng PrivateRoute và Lazy Loading route để tối ưu hiệu năng ứng dụng."
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    except: "Redux giúp quản lý state tập trung...",
    content: "Trong nội dung này, bạn sẽ học về Redux - một thư viện quản lý state tập trung mạnh mẽ cho các ứng dụng React. Chúng ta sẽ đi từ khái niệm store, action và reducer đến cách sử dụng middleware để xử lý bất đồng bộ. Bạn sẽ được thực hành với thư viện react-redux để kết nối React component với Redux store. Ngoài ra, phần học cũng sẽ giới thiệu Redux Toolkit - một bộ công cụ hiện đại giúp giảm bớt boilerplate code, đơn giản hóa việc viết reducer và tạo action. Qua đó, bạn sẽ hiểu rõ cách tổ chức state toàn cục và khi nào nên dùng Redux thay vì Context API."
  },
  {
    id: 5,
    title: "Hooks trong React",
    except: "useState, useEffect và các hook phổ biến...",
    content: "Trong phần học này, bạn sẽ đi sâu vào thế giới Hooks - một tính năng mạnh mẽ được giới thiệu từ React 16.8. Bạn sẽ học về useState để quản lý state trong functional component, useEffect để xử lý side-effect như call API hoặc lắng nghe sự kiện. Ngoài ra, bạn sẽ được tiếp cận với các hook khác như useContext, useReducer, useRef và useMemo để tối ưu hiệu năng. Khóa học cũng hướng dẫn bạn cách tự viết custom hook để tái sử dụng logic trong nhiều component khác nhau. Đây là bước quan trọng giúp bạn phát triển ứng dụng React hiện đại một cách gọn gàng và dễ bảo trì."
  }
];
