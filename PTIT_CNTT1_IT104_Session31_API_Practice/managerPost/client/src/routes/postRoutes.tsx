import React from "react";
const FormAddPost = React.lazy(() => import("../pages/posts/FormAddPost"));
const PostDetail = React.lazy(() => import("../pages/posts/PostDetail"));
const PostList = React.lazy(() => import("../pages/posts/PostList"));
import type { RouteObject } from "react-router-dom";
import LazyLoader from "../components/base/LazyLoader";

export type Post = {
  id?: number;
  title?: string;
  image?: string;
  createAt?: string;
  status?: string;
  content?: string;
};

const postRouters: RouteObject[] = [
  {
    path: "/post-list",
    element: (
      <LazyLoader>
        <PostList />
      </LazyLoader>
    ),
  },
  {
    path: "/post-detail/:id",
    element: (
      <LazyLoader>
        <PostDetail />
      </LazyLoader>
    ),
  },
  {
    path: "/form-add-post",
    element: (
      <LazyLoader>
        <FormAddPost />
      </LazyLoader>
    ),
  },
];

export default postRouters;
